import Model from "./model.js";

import V3Store from "/vee3/vee_store.js";

/**
 * Framework7 Demonstration
 */
export default class Main {
    /**
     * 
     * @param {*} config 
     */
    constructor(config) {
        Model.api = config.api;

        V3Store.instanceId(config.app.instancedid);
    }

    /**
     * Main start point for the app
     * @param {*} params
     */
    async init(params) {
        console.log("Ops started")

        ko.applyBindings(Model);
    }
}