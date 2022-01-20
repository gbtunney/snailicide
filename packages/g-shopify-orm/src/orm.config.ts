//************** Register ORM Plugins  *****************//
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from "@vuex-orm/plugin-change-flags";
import VuexORMSearch from "@vuex-orm/plugin-search";

//import globalSettingsModule from "./modules/globalSettings.js";

const plugins = [
  [VuexORMAxios,
    {
      baseURL: "http://google.com",
    },
  ],
  [VuexORMSearch,
    {
      caseSensitive: true,
      threshold: 0,
    },
  ],
  [VuexORMisDirtyPlugin,
    {
      isNewFlagName: "IsNew",
      isDirtyFlagName: "IsDirty",
      exposeFlagsExternally: false,
    },
  ],
];

const modules = {
  /* global: globalSettingsModule,*/
};
//************** ORM Models  *****************//
import Models from "./orm";

export default [Models, plugins, modules];
