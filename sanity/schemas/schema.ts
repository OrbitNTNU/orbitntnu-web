import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import landingPage from "./landingPage";
import cardLink from "./cardLink";
import footer from "./footer";
import someLink from "./someLink";
import textLink from "./textLink";
import member from "./member";
import team from "./team";
import position from "./position";

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
  ]),
});
