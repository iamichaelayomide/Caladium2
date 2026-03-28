import { contactPageType } from "../schemas/contactPageType";
import { homePageType } from "../schemas/homePageType";
import { postType } from "../schemas/postType";
import { serviceType } from "../schemas/serviceType";
import { servicesPageType } from "../schemas/servicesPageType";
import { siteSettingsType } from "../schemas/siteSettingsType";
import { teamMemberType } from "../schemas/teamMemberType";
import { teamPageType } from "../schemas/teamPageType";

export const schemaTypes = [
  postType,
  serviceType,
  teamMemberType,
  siteSettingsType,
  homePageType,
  servicesPageType,
  teamPageType,
  contactPageType
];
