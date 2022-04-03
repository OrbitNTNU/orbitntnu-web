import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import landingPage from "./landingPage";
import cardLink from "./cardLink";
import footer from "./footer";
import someLink from "./someLink";
import textLink from "./textLink";
import member from "./member";
import team from "./team";
import position from "./position";
import joinPage from "./joinPage";
import aboutPage from "./aboutPage";
import contactPage from "./contactPage";
import teamsPage from "./teamsPage";
import sponsorsPage from "./sponsorsPage";

export default createSchema({
  name: "pages",
  types: schemaTypes.concat([
    landingPage,
    cardLink,
    footer,
    someLink,
    textLink,
    member,
    team,
    position,
    joinPage,
    aboutPage,
    contactPage,
    teamsPage,
    sponsorsPage,
  ]),
});
