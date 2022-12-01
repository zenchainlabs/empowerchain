package plasticcredit

import (
	"encoding/hex"

	errors "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var (
	_ sdk.Msg = &MsgUpdateParams{}
	_ sdk.Msg = &MsgCreateIssuer{}
	_ sdk.Msg = &MsgCreateApplicant{}
)

func (m *MsgUpdateParams) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Authority)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid authority address (%s)", err)
	}

	return m.Params.Validate()
}

func (m *MsgUpdateParams) GetSigners() []sdk.AccAddress {
	reporter, err := sdk.AccAddressFromBech32(m.Authority)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{reporter}
}

func (m *MsgCreateIssuer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(m.Admin)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	if m.Name == "" {
		return errors.Wrap(ErrInvalidIssuerName, "issuer name cannot be empty")
	}

	return nil
}

func (m *MsgCreateIssuer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (m *MsgCreateApplicant) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Admin)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	if m.Name == "" {
		return errors.Wrap(ErrInvalidApplicantName, "applicant name cannot be empty")
	}

	return nil
}

func (m *MsgCreateApplicant) GetSigners() []sdk.AccAddress {
	admin, err := sdk.AccAddressFromBech32(m.Admin)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{admin}
}

func (m *MsgIssueCredits) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if m.ProjectId == 0 {
		return errors.Wrap(ErrInvalidProjectId, "invalid project id")
	}
	if m.DenomSuffix == "" {
		return errors.Wrap(ErrInvalidDenomSuffix, "invalid denom suffix")
	}
	if m.CreditAmount.Active == 0 && m.CreditAmount.Retired == 0 {
		return errors.Wrap(ErrInvalidCreditAmount, "invalid credit amount")
	}
	for _, data := range m.CreditData {
		_, err = hex.DecodeString(data.Hash)
		if err != nil {
			return errors.Wrapf(ErrInvalidHash, "Invalid hash: %s", data.Hash)
		}
		if data.Uri == "" {
			return errors.Wrap(ErrInvalidUri, "Invalid uri")
		}
	}
	return nil
}

func (m *MsgIssueCredits) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (m *MsgTransferCredits) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.From)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(m.To)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid recipient address (%s)", err)
	}
	if m.Denom == "" {
		return errors.Wrap(ErrInvalidDenom, "invalid denom")
	}
	if m.Amount == 0 {
		return errors.Wrap(ErrInvalidCreditAmount, "invalid credit amount")
	}
	return nil
}

func (m *MsgTransferCredits) GetSigners() []sdk.AccAddress {
	from, err := sdk.AccAddressFromBech32(m.From)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{from}
}

func (m *MsgRetireCredits) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Owner)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	if m.Denom == "" {
		return errors.Wrap(ErrInvalidDenom, "invalid denom")
	}
	if m.Amount == 0 {
		return errors.Wrap(ErrInvalidCreditAmount, "invalid credit amount")
	}
	return nil
}

func (m *MsgRetireCredits) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(m.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}
