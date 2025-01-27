import KeycloakAdminClient from "@keycloak/keycloak-admin-client";
import { Credentials } from "@keycloak/keycloak-admin-client/lib/utils/auth";
import UserRepresentation from "@keycloak/keycloak-admin-client/lib/defs/userRepresentation";
import EventRepresentation from "@keycloak/keycloak-admin-client/lib/defs/eventRepresentation";
import RoleRepresentation from "@keycloak/keycloak-admin-client/lib/defs/roleRepresentation";
import ClientRepresentation from "@keycloak/keycloak-admin-client/lib/defs/clientRepresentation";
import ClientScopeRepresentation from "@keycloak/keycloak-admin-client/lib/defs/clientScopeRepresentation";
import ResourceRepresentation from "@keycloak/keycloak-admin-client/lib/defs/resourceRepresentation";
export {
  KeycloakAdminClient,
  Credentials,
  UserRepresentation,
  EventRepresentation,
  ResourceRepresentation,
  RoleRepresentation,
  ClientRepresentation,
  ClientScopeRepresentation,
};
