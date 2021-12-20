import V3Store from "/vee3/vee_store.js";
import Utils from "./utils.js";

let Model = {
    api: undefined,
    view: ko.observable("home"),

    home: {},
    console: ko.observable(""),

    // Methods
    home_on_app_statistics: async function() {
        // Post results to authorize
        let res = await V3Store.$post("/services/ops/default/statistics", { app: "notes" });
        let records = res.records;
        let out = [];
        out.push(`<div class="min-w-full divide-y divide-gray-200">`);

        for (let i = 0; i < records.length; i++) {
            out.push(`<div>`);
            out.push(`<span class="px-6 py-4 whitespace-nowrap">${records[i].ts_readable}</span>`);
            out.push(`<span class="px-6 py-4 whitespace-nowrap">${records[i].app_id}</span>`);
            out.push(`<span class="px-6 py-4 whitespace-nowrap">${records[i].web_id}</span>`);
            out.push(`<span class="px-6 py-4 whitespace-nowrap">${records[i].action}</span>`);
            out.push(`</div>`);
        }

        out.push(`</div>`);

        this.console(out.join(""));
    },

    route: function(path) {
        this.view(path);
    }
}

export default Model;