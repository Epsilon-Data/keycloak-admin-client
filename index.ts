import KeycloakAdminClient from "@keycloak/keycloak-admin-client";
import { Credentials } from "@keycloak/keycloak-admin-client/lib/utils/auth";
import UserRepresentation from "@keycloak/keycloak-admin-client/lib/defs/userRepresentation";
import EventRepresentation from "@keycloak/keycloak-admin-client/lib/defs/eventRepresentation";
import RoleRepresentation from "@keycloak/keycloak-admin-client/lib/defs/roleRepresentation";
import ClientRepresentation from "@keycloak/keycloak-admin-client/lib/defs/clientRepresentation";
import ClientScopeRepresentation from "@keycloak/keycloak-admin-client/lib/defs/clientScopeRepresentation";
import ResourceRepresentation from "@keycloak/keycloak-admin-client/lib/defs/resourceRepresentation";
import PolicyRoleRepresentation from "@keycloak/keycloak-admin-client/lib/defs/policyRepresentation";
import ClientQuery from "@keycloak/keycloak-admin-client/lib/defs/clientRepresentation";
import GroupRepresentation from "@keycloak/keycloak-admin-client/lib/defs/groupRepresentation";
import PolicyRepresentation from "@keycloak/keycloak-admin-client/lib/defs/policyRepresentation";

export {
  KeycloakAdminClient,
  Credentials,
  UserRepresentation,
  EventRepresentation,
  ResourceRepresentation,
  RoleRepresentation,
  ClientRepresentation,
  ClientScopeRepresentation,
  PolicyRoleRepresentation,
  ClientQuery,
  GroupRepresentation,
  PolicyRepresentation,
};
