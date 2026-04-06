import type { StructureResolver } from "sanity/desk";

const singleton = (
  S: Parameters<NonNullable<StructureResolver>>[0],
  title: string,
  schemaType: string,
  documentId: string
) =>
  S.listItem()
    .title(title)
    .id(documentId)
    .child(S.editor().id(documentId).schemaType(schemaType).documentId(documentId));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Colodam CMS")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              singleton(S, "Home Page", "homePage", "homePage"),
              singleton(S, "Services Page", "servicesPage", "servicesPage"),
              singleton(S, "Team Page", "teamPage", "teamPage"),
              singleton(S, "Contact Page", "contactPage", "contactPage")
            ])
        ),
      S.listItem()
        .title("Collections")
        .child(
          S.list()
            .title("Collections")
            .items([
              S.documentTypeListItem("post").title("Blog Posts"),
              S.documentTypeListItem("service").title("Services"),
              S.documentTypeListItem("teamMember").title("Team Members")
            ])
        ),
      S.divider(),
      singleton(S, "Site Settings", "siteSettings", "siteSettings")
    ]);
