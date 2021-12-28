import * as Realm from "realm-web";

export const realmApp = new Realm.App({
  id: process.env.NEXT_PUBLIC_REALM_APP_ID,
});
