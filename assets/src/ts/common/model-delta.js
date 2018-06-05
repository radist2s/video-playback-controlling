import Backbone from 'common/backbone'
import _ from 'lodash'

export default class ModelDelta extends Backbone.Model {
    set(key, val, options) {
        var attr, attrs, unset, changes, silent, changing, prev, current;
        if (key == null) return this;

        // Handle both `"key", value` and `{key: value}` -style arguments.
        if (typeof key === 'object') {
            attrs = key;
            options = val;
        } else {
            (attrs = {})[key] = val;
        }

        options || (options = {});

        // Run validation.
        if (!this._validate(attrs, options)) return false;

        // Extract attributes and options.
        unset = options.unset;
        silent = options.silent;
        changes = [];
        changing = this._changing;
        this._changing = true;

        if (!changing) {
            // Patch started
            var attributesCopy = _.clone(this.attributes),
                changedAttributesKeys = Object.keys(attrs);

            this._previousAttributes = this._previousAttributes || {};

            _.forEach(changedAttributesKeys, (key) => {
                if (_.has(attributesCopy, key) && !_.isEqual(attributesCopy[key], attrs[key])) {
                    this._previousAttributes[key] = attributesCopy[key]
                }
            })

            // Patch ended

            //this._previousAttributes = _.clone(this.attributes); // default bb funct

            const changeName = 'change'
            this[changeName] = {};
        }
        current = this.attributes, prev = this._previousAttributes;

        // Check for changes of `id`.
        if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

        // For each `set` attribute, update or delete the current value.
        for (attr in attrs) {
            val = attrs[attr];
            if (!_.isEqual(current[attr], val)) changes.push(attr);
            if (!_.isEqual(prev[attr], val)) {
                this.changed[attr] = val;
            } else {
                delete this.changed[attr];
            }
            unset ? delete current[attr] : current[attr] = val;
        }

        // Trigger all relevant attribute changes.
        if (!silent) {
            if (changes.length) this._pending = options;
            for (var i = 0, l = changes.length; i < l; i++) {
                this.trigger('change:' + changes[i], this, current[changes[i]], options);
            }
        }

        // You might be wondering why there's a `while` loop here. Changes can
        // be recursively nested within `"change"` events.
        if (changing) return this;

        if (!silent) {
            while (this._pending) {
                let options = this._pending;
                this._pending = false;
                this.trigger('change', this, options);
            }
        }
        this._pending = false;
        this._changing = false;

        return this;
    }
}