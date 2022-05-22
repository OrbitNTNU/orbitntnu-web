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
import notFoundPage from "./notFoundPage";
import blogPage from "./blogPage";
import galleryPage from "./galleryPage";
import suborbitalPage from "./suborbitalPage";
import sponsor from "./sponsor";
import mainSponsorImage from "./mainSponsorImage";
import mainSponsorLargeImage from "./mainSponsorLargeImage";
import specification from "./specification";
import selfiesatPage from "./selfiesatPage";

export default createSchema({
  name: "pages",
  types: schemaTypes.concat([
    landingPage,
    selfiesatPage,
    aboutPage,
    sponsorsPage,
    contactPage,
    teamsPage,
    joinPage,
    blogPage,
    galleryPage,
    suborbitalPage,
    notFoundPage,
    position,
    cardLink,
    footer,
    someLink,
    textLink,
    member,
    team,
    sponsor,
    mainSponsorImage,
    mainSponsorLargeImage,
    specification,
  ]),
});
