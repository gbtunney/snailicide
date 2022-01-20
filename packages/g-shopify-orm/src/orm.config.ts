//************** Register ORM Plugins  *****************//
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORMisDirtyPlugin from "@vuex-orm/plugin-change-flags";
import VuexORMSearch from "@vuex-orm/plugin-search";

import globalSettingsModule from "./../src/modules/globalSettings.js";
import ormmodule from "./../src/modules/ormmodule.js";
import moduleProductLoader from "./../src/modules/ProductLoaderModule.js";

const modules={
  global: globalSettingsModule,
     // orm: ormmodule,
      productloader: moduleProductLoader,
}

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

//************** ORM Models  *****************//
import Models from "./orm";

const options =  [Models, plugins, modules];
export default options
