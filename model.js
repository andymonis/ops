import V3Store from "/vee3/vee_store.js";
import Utils from "./utils.js";

let Model = {
    api: undefined,
    view: ko.observable("home"),

    home: {},
    console: ko.observable(""),

    // Methods
    home_on_app_statistics: async function() {
        // Get all Apps
        let results = await V3Store.$get("/services/ops/apps");
        let apps = results.records;

        // Iterate over all apps
        let out = [];
        out.push(`<div class="min-w-full divide-y divide-gray-200">`);
        for (let j = 0; j < apps.length; j++) {
            // Post results to authorize
            let app = await V3Store.$get(`/services/ops/${apps[j].id}/statistics`);
            for (let i = 0; i < app.records.length; i++) {
                out.push(`<div>`);
                out.push(`<span class="px-6 py-4 whitespace-nowrap">${app.records[i].ts_readable}</span>`);
                out.push(`<span class="px-6 py-4 whitespace-nowrap">${app.records[i].app_id}</span>`);
                out.push(`<span class="px-6 py-4 whitespace-nowrap">${app.records[i].web_id}</span>`);
                out.push(`<span class="px-6 py-4 whitespace-nowrap">${app.records[i].action}</span>`);
                out.push(`</div>`);
            }
        }
        out.push(`</div>`);

        this.console(out.join(""));
    },

    route: function(path) {
        this.view(path);
    }
}

export default Model;