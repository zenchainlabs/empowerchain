import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
/** EventCreateIssuer is an event emitted when a new issuer is created */

export interface EventCreateIssuer {
  issuerId: Long;
  creator: string;
  name: string;
  description: string;
  admin: string;
}
/** EventCreateIssuer is an event emitted when a new issuer is created */

export interface EventCreateIssuerSDKType {
  issuer_id: Long;
  creator: string;
  name: string;
  description: string;
  admin: string;
}
/** EventUpdateIssuer is an event emitted when an issuer is updated */

export interface EventUpdateIssuer {
  issuerId: Long;
  creator: string;
  name: string;
  description: string;
  admin: string;
}
/** EventUpdateIssuer is an event emitted when an issuer is updated */

export interface EventUpdateIssuerSDKType {
  issuer_id: Long;
  creator: string;
  name: string;
  description: string;
  admin: string;
}
/** EventCreateProject is an event emitted when a new Project is created */

export interface EventCreateProject {
  creator: string;
  applicantId: Long;
  creditTypeAbbreviation: string;
  name: string;
}
/** EventCreateProject is an event emitted when a new Project is created */

export interface EventCreateProjectSDKType {
  creator: string;
  applicant_id: Long;
  credit_type_abbreviation: string;
  name: string;
}
/** EventUpdateProject is an event emitted when a Project is updated */

export interface EventUpdateProject {
  updater: string;
  projectId: Long;
  name: string;
}
/** EventUpdateProject is an event emitted when a Project is updated */

export interface EventUpdateProjectSDKType {
  updater: string;
  project_id: Long;
  name: string;
}
/** EventProjectApproved is an event emitted when a project is approved by the issuer associated with the projects credit type */

export interface EventProjectApproved {
  projectId: Long;
  approvedForCreditTypeAbbreviation: string;
  approvingIssuerId: Long;
  approvedBy: string;
}
/** EventProjectApproved is an event emitted when a project is approved by the issuer associated with the projects credit type */

export interface EventProjectApprovedSDKType {
  project_id: Long;
  approved_for_credit_type_abbreviation: string;
  approving_issuer_id: Long;
  approved_by: string;
}
/** EventProjectRejected is an event emitted when a project is rejected by the issuer associated with the projects credit type */

export interface EventProjectRejected {
  projectId: Long;
  rejectedForCreditTypeAbbreviation: string;
  rejectingIssuerId: Long;
  rejectedBy: string;
}
/** EventProjectRejected is an event emitted when a project is rejected by the issuer associated with the projects credit type */

export interface EventProjectRejectedSDKType {
  project_id: Long;
  rejected_for_credit_type_abbreviation: string;
  rejecting_issuer_id: Long;
  rejected_by: string;
}
/** EventProjectSuspended is an event emitted when a project is suspended by the issuer associated with the projects credit type */

export interface EventProjectSuspended {
  projectId: Long;
  suspendedForCreditTypeAbbreviation: string;
  suspendingIssuerId: Long;
  suspendedBy: string;
}
/** EventProjectSuspended is an event emitted when a project is suspended by the issuer associated with the projects credit type */

export interface EventProjectSuspendedSDKType {
  project_id: Long;
  suspended_for_credit_type_abbreviation: string;
  suspending_issuer_id: Long;
  suspended_by: string;
}
/** EventIssuedCredits is an event emitted when new credits are issued */

export interface EventIssuedCredits {
  issuerId: Long;
  projectId: Long;
  creditTypeAbbreviation: string;
  denom: string;
  amount: Long;
  issuerAddress: string;
  metadataUris: string[];
}
/** EventIssuedCredits is an event emitted when new credits are issued */

export interface EventIssuedCreditsSDKType {
  issuer_id: Long;
  project_id: Long;
  credit_type_abbreviation: string;
  denom: string;
  amount: Long;
  issuer_address: string;
  metadata_uris: string[];
}
/** EventTransferCredits is an event emitted when credits are being transfered from one account to another */

export interface EventTransferCredits {
  sender: string;
  recipient: string;
  denom: string;
  amount: Long;
  issuerId: Long;
  creditTypeAbbreviation: string;
}
/** EventTransferCredits is an event emitted when credits are being transfered from one account to another */

export interface EventTransferCreditsSDKType {
  sender: string;
  recipient: string;
  denom: string;
  amount: Long;
  issuer_id: Long;
  credit_type_abbreviation: string;
}
/** EventRetiredCredits is an event emitted when credits are retired */

export interface EventRetiredCredits {
  owner: string;
  denom: string;
  amount: Long;
  issuerId: Long;
  creditTypeAbbreviation: string;
}
/** EventRetiredCredits is an event emitted when credits are retired */

export interface EventRetiredCreditsSDKType {
  owner: string;
  denom: string;
  amount: Long;
  issuer_id: Long;
  credit_type_abbreviation: string;
}
/** EventCreateApplicant is an event emitted when a new applicant is created */

export interface EventCreateApplicant {
  applicantId: Long;
  name: string;
  description: string;
  admin: string;
}
/** EventCreateApplicant is an event emitted when a new applicant is created */

export interface EventCreateApplicantSDKType {
  applicant_id: Long;
  name: string;
  description: string;
  admin: string;
}
/** EventUpdateApplicant is an event emitted when an applicant is updated */

export interface EventUpdateApplicant {
  applicantId: Long;
  name: string;
  description: string;
  admin: string;
  updater: string;
}
/** EventUpdateApplicant is an event emitted when an applicant is updated */

export interface EventUpdateApplicantSDKType {
  applicant_id: Long;
  name: string;
  description: string;
  admin: string;
  updater: string;
}
/** EventCreateCreditType is an event emitted when a new Credit Type is created */

export interface EventCreateCreditType {
  creator: string;
  abbreviation: string;
  issuerId: Long;
  name: string;
}
/** EventCreateCreditType is an event emitted when a new Credit Type is created */

export interface EventCreateCreditTypeSDKType {
  creator: string;
  abbreviation: string;
  issuer_id: Long;
  name: string;
}
/** EventUpdateCreditType is an event emitted when a Credit Type is updated */

export interface EventUpdateCreditType {
  updater: string;
  abbreviation: string;
  name: string;
}
/** EventUpdateCreditType is an event emitted when a Credit Type is updated */

export interface EventUpdateCreditTypeSDKType {
  updater: string;
  abbreviation: string;
  name: string;
}

function createBaseEventCreateIssuer(): EventCreateIssuer {
  return {
    issuerId: Long.UZERO,
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}

export const EventCreateIssuer = {
  encode(message: EventCreateIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.admin !== "") {
      writer.uint32(42).string(message.admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateIssuer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuerId = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.admin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreateIssuer>): EventCreateIssuer {
    const message = createBaseEventCreateIssuer();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseEventUpdateIssuer(): EventUpdateIssuer {
  return {
    issuerId: Long.UZERO,
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}

export const EventUpdateIssuer = {
  encode(message: EventUpdateIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.admin !== "") {
      writer.uint32(42).string(message.admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateIssuer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuerId = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.admin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventUpdateIssuer>): EventUpdateIssuer {
    const message = createBaseEventUpdateIssuer();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseEventCreateProject(): EventCreateProject {
  return {
    creator: "",
    applicantId: Long.UZERO,
    creditTypeAbbreviation: "",
    name: ""
  };
}

export const EventCreateProject = {
  encode(message: EventCreateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.applicantId.isZero()) {
      writer.uint32(16).uint64(message.applicantId);
    }

    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(26).string(message.creditTypeAbbreviation);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.applicantId = (reader.uint64() as Long);
          break;

        case 3:
          message.creditTypeAbbreviation = reader.string();
          break;

        case 4:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreateProject>): EventCreateProject {
    const message = createBaseEventCreateProject();
    message.creator = object.creator ?? "";
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseEventUpdateProject(): EventUpdateProject {
  return {
    updater: "",
    projectId: Long.UZERO,
    name: ""
  };
}

export const EventUpdateProject = {
  encode(message: EventUpdateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        case 3:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventUpdateProject>): EventUpdateProject {
    const message = createBaseEventUpdateProject();
    message.updater = object.updater ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseEventProjectApproved(): EventProjectApproved {
  return {
    projectId: Long.UZERO,
    approvedForCreditTypeAbbreviation: "",
    approvingIssuerId: Long.UZERO,
    approvedBy: ""
  };
}

export const EventProjectApproved = {
  encode(message: EventProjectApproved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }

    if (message.approvedForCreditTypeAbbreviation !== "") {
      writer.uint32(18).string(message.approvedForCreditTypeAbbreviation);
    }

    if (!message.approvingIssuerId.isZero()) {
      writer.uint32(24).uint64(message.approvingIssuerId);
    }

    if (message.approvedBy !== "") {
      writer.uint32(34).string(message.approvedBy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectApproved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectApproved();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = (reader.uint64() as Long);
          break;

        case 2:
          message.approvedForCreditTypeAbbreviation = reader.string();
          break;

        case 3:
          message.approvingIssuerId = (reader.uint64() as Long);
          break;

        case 4:
          message.approvedBy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventProjectApproved>): EventProjectApproved {
    const message = createBaseEventProjectApproved();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.approvedForCreditTypeAbbreviation = object.approvedForCreditTypeAbbreviation ?? "";
    message.approvingIssuerId = object.approvingIssuerId !== undefined && object.approvingIssuerId !== null ? Long.fromValue(object.approvingIssuerId) : Long.UZERO;
    message.approvedBy = object.approvedBy ?? "";
    return message;
  }

};

function createBaseEventProjectRejected(): EventProjectRejected {
  return {
    projectId: Long.UZERO,
    rejectedForCreditTypeAbbreviation: "",
    rejectingIssuerId: Long.UZERO,
    rejectedBy: ""
  };
}

export const EventProjectRejected = {
  encode(message: EventProjectRejected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }

    if (message.rejectedForCreditTypeAbbreviation !== "") {
      writer.uint32(18).string(message.rejectedForCreditTypeAbbreviation);
    }

    if (!message.rejectingIssuerId.isZero()) {
      writer.uint32(24).uint64(message.rejectingIssuerId);
    }

    if (message.rejectedBy !== "") {
      writer.uint32(34).string(message.rejectedBy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectRejected {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectRejected();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = (reader.uint64() as Long);
          break;

        case 2:
          message.rejectedForCreditTypeAbbreviation = reader.string();
          break;

        case 3:
          message.rejectingIssuerId = (reader.uint64() as Long);
          break;

        case 4:
          message.rejectedBy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventProjectRejected>): EventProjectRejected {
    const message = createBaseEventProjectRejected();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.rejectedForCreditTypeAbbreviation = object.rejectedForCreditTypeAbbreviation ?? "";
    message.rejectingIssuerId = object.rejectingIssuerId !== undefined && object.rejectingIssuerId !== null ? Long.fromValue(object.rejectingIssuerId) : Long.UZERO;
    message.rejectedBy = object.rejectedBy ?? "";
    return message;
  }

};

function createBaseEventProjectSuspended(): EventProjectSuspended {
  return {
    projectId: Long.UZERO,
    suspendedForCreditTypeAbbreviation: "",
    suspendingIssuerId: Long.UZERO,
    suspendedBy: ""
  };
}

export const EventProjectSuspended = {
  encode(message: EventProjectSuspended, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }

    if (message.suspendedForCreditTypeAbbreviation !== "") {
      writer.uint32(18).string(message.suspendedForCreditTypeAbbreviation);
    }

    if (!message.suspendingIssuerId.isZero()) {
      writer.uint32(24).uint64(message.suspendingIssuerId);
    }

    if (message.suspendedBy !== "") {
      writer.uint32(34).string(message.suspendedBy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectSuspended {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectSuspended();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = (reader.uint64() as Long);
          break;

        case 2:
          message.suspendedForCreditTypeAbbreviation = reader.string();
          break;

        case 3:
          message.suspendingIssuerId = (reader.uint64() as Long);
          break;

        case 4:
          message.suspendedBy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventProjectSuspended>): EventProjectSuspended {
    const message = createBaseEventProjectSuspended();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.suspendedForCreditTypeAbbreviation = object.suspendedForCreditTypeAbbreviation ?? "";
    message.suspendingIssuerId = object.suspendingIssuerId !== undefined && object.suspendingIssuerId !== null ? Long.fromValue(object.suspendingIssuerId) : Long.UZERO;
    message.suspendedBy = object.suspendedBy ?? "";
    return message;
  }

};

function createBaseEventIssuedCredits(): EventIssuedCredits {
  return {
    issuerId: Long.UZERO,
    projectId: Long.UZERO,
    creditTypeAbbreviation: "",
    denom: "",
    amount: Long.UZERO,
    issuerAddress: "",
    metadataUris: []
  };
}

export const EventIssuedCredits = {
  encode(message: EventIssuedCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(26).string(message.creditTypeAbbreviation);
    }

    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }

    if (!message.amount.isZero()) {
      writer.uint32(40).uint64(message.amount);
    }

    if (message.issuerAddress !== "") {
      writer.uint32(50).string(message.issuerAddress);
    }

    for (const v of message.metadataUris) {
      writer.uint32(58).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventIssuedCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssuedCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuerId = (reader.uint64() as Long);
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        case 3:
          message.creditTypeAbbreviation = reader.string();
          break;

        case 4:
          message.denom = reader.string();
          break;

        case 5:
          message.amount = (reader.uint64() as Long);
          break;

        case 6:
          message.issuerAddress = reader.string();
          break;

        case 7:
          message.metadataUris.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventIssuedCredits>): EventIssuedCredits {
    const message = createBaseEventIssuedCredits();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.issuerAddress = object.issuerAddress ?? "";
    message.metadataUris = object.metadataUris?.map(e => e) || [];
    return message;
  }

};

function createBaseEventTransferCredits(): EventTransferCredits {
  return {
    sender: "",
    recipient: "",
    denom: "",
    amount: Long.UZERO,
    issuerId: Long.UZERO,
    creditTypeAbbreviation: ""
  };
}

export const EventTransferCredits = {
  encode(message: EventTransferCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }

    if (!message.issuerId.isZero()) {
      writer.uint32(40).uint64(message.issuerId);
    }

    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(50).string(message.creditTypeAbbreviation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.amount = (reader.uint64() as Long);
          break;

        case 5:
          message.issuerId = (reader.uint64() as Long);
          break;

        case 6:
          message.creditTypeAbbreviation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTransferCredits>): EventTransferCredits {
    const message = createBaseEventTransferCredits();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    return message;
  }

};

function createBaseEventRetiredCredits(): EventRetiredCredits {
  return {
    owner: "",
    denom: "",
    amount: Long.UZERO,
    issuerId: Long.UZERO,
    creditTypeAbbreviation: ""
  };
}

export const EventRetiredCredits = {
  encode(message: EventRetiredCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }

    if (!message.issuerId.isZero()) {
      writer.uint32(32).uint64(message.issuerId);
    }

    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(42).string(message.creditTypeAbbreviation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRetiredCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRetiredCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.amount = (reader.uint64() as Long);
          break;

        case 4:
          message.issuerId = (reader.uint64() as Long);
          break;

        case 5:
          message.creditTypeAbbreviation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventRetiredCredits>): EventRetiredCredits {
    const message = createBaseEventRetiredCredits();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    return message;
  }

};

function createBaseEventCreateApplicant(): EventCreateApplicant {
  return {
    applicantId: Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}

export const EventCreateApplicant = {
  encode(message: EventCreateApplicant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.applicantId.isZero()) {
      writer.uint32(8).uint64(message.applicantId);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateApplicant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateApplicant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.applicantId = (reader.uint64() as Long);
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreateApplicant>): EventCreateApplicant {
    const message = createBaseEventCreateApplicant();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseEventUpdateApplicant(): EventUpdateApplicant {
  return {
    applicantId: Long.UZERO,
    name: "",
    description: "",
    admin: "",
    updater: ""
  };
}

export const EventUpdateApplicant = {
  encode(message: EventUpdateApplicant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.applicantId.isZero()) {
      writer.uint32(8).uint64(message.applicantId);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }

    if (message.updater !== "") {
      writer.uint32(42).string(message.updater);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateApplicant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateApplicant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.applicantId = (reader.uint64() as Long);
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        case 5:
          message.updater = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventUpdateApplicant>): EventUpdateApplicant {
    const message = createBaseEventUpdateApplicant();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    message.updater = object.updater ?? "";
    return message;
  }

};

function createBaseEventCreateCreditType(): EventCreateCreditType {
  return {
    creator: "",
    abbreviation: "",
    issuerId: Long.UZERO,
    name: ""
  };
}

export const EventCreateCreditType = {
  encode(message: EventCreateCreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }

    if (!message.issuerId.isZero()) {
      writer.uint32(24).uint64(message.issuerId);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCreditType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.abbreviation = reader.string();
          break;

        case 3:
          message.issuerId = (reader.uint64() as Long);
          break;

        case 4:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreateCreditType>): EventCreateCreditType {
    const message = createBaseEventCreateCreditType();
    message.creator = object.creator ?? "";
    message.abbreviation = object.abbreviation ?? "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseEventUpdateCreditType(): EventUpdateCreditType {
  return {
    updater: "",
    abbreviation: "",
    name: ""
  };
}

export const EventUpdateCreditType = {
  encode(message: EventUpdateCreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }

    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCreditType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;

        case 2:
          message.abbreviation = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventUpdateCreditType>): EventUpdateCreditType {
    const message = createBaseEventUpdateCreditType();
    message.updater = object.updater ?? "";
    message.abbreviation = object.abbreviation ?? "";
    message.name = object.name ?? "";
    return message;
  }

};