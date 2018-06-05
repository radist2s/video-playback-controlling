import * as Backbone from 'backbone'

export default class MainView extends Backbone.View<Backbone.Model> {
    el: HTMLElement
    private mainVideoNode: HTMLVideoElement
    private videoReadyPromise: Promise<any>
    private videoStepsTotal: number
    private playbackFrame: number

    events() {
        return {
            'change [name=playback]': 'onInputPlaybackChange'
        }
    }

    initialize() {
        this.model = new Backbone.Model({
            videoState: parseInt((this.el.querySelector('[name=playback]:checked') as HTMLInputElement).value)
        })

        this.mainVideoNode = this.el.querySelector('#mainVideo') as HTMLVideoElement

        this.videoReadyPromise = new Promise((resolve) => {
            this.videoReadPromiseAttach().then(resolve)
        })

        this.videoStepsTotal = this.el.querySelectorAll('[name=playback]').length

        this.listenTo(this.model, 'change:videoState', this.onVideoStateChange)
    }

    async videoReadPromiseAttach() {
        if (this.mainVideoNode.readyState >= this.mainVideoNode.HAVE_ENOUGH_DATA) {
            return true
        }
        else {
            const canPlayPromise = new Promise((resolve) => {
                const canPlayThrough = () => {
                    this.mainVideoNode.removeEventListener('canplaythrough', canPlayThrough)

                    resolve()
                }

                this.mainVideoNode.addEventListener('canplaythrough', canPlayThrough)

                const videoPreloader = new XMLHttpRequest()
                videoPreloader.open('GET', this.mainVideoNode.currentSrc)
                videoPreloader.responseType = 'blob'

                videoPreloader.onload = (request) => {
                    if (videoPreloader.status !== 200) {
                        return
                    }

                    this.mainVideoNode.preload = 'auto'
                }

                videoPreloader.send()
            })

            return canPlayPromise
        }
    }

    onInputPlaybackChange(e: Event) {
        const inputNode = (e.delegateTarget || e.currentTarget) as HTMLInputElement

        this.model.set({
            videoState: parseInt(inputNode.value)
        })
    }

    private async onVideoStateChange() {
        const videoState = this.model.get('videoState')

        this.videoReadyPromise.then(this.setVideoPositionStep.bind(this, videoState))
    }

    private setVideoPositionStep(videoState) {
        const durationPerState = this.mainVideoNode.duration / (this.videoStepsTotal - 1)

        this.playVideo(durationPerState, videoState)
    }

    private playVideo(durationPerState, videoState) {
        if (this.playbackFrame) {
            cancelAnimationFrame(this.playbackFrame)
        }

        durationPerState = durationPerState * 1000

        const currentVideoTime = this.mainVideoNode.currentTime * 1000
        const currentVideoState = Math.ceil(currentVideoTime / durationPerState)

        const videoStartTime = currentVideoTime

        const videoEndTime = durationPerState * videoState

        const playbackStartTime = Date.now()

        const playbackDuration = Math.min(Math.abs(videoEndTime - videoStartTime), durationPerState)

        const playbackLoop = () => {
            const timeElapsed = Date.now() - playbackStartTime

            const completed = Math.min(timeElapsed / playbackDuration, 1)

            if (completed < 1) {
                const easingFactor = this.animationEasing(completed, playbackDuration * completed, 0, 1, playbackDuration)

                const currentVideoTimeEased = (videoEndTime - videoStartTime) * easingFactor + videoStartTime

                this.mainVideoNode.currentTime = currentVideoTimeEased / 1000

                this.playbackFrame = requestAnimationFrame(playbackLoop)
            }
            else {
                this.mainVideoNode.currentTime = videoEndTime / 1000
            }
        }

        this.playbackFrame = requestAnimationFrame(playbackLoop)
    }

    /**
     * easeOutSine
     *
     * @param x
     * @param t
     * @param b
     * @param c
     * @param d
     * @return {any}
     */
    private animationEasing(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    }
}

MainView.prototype.el = <HTMLElement><any>'#root'