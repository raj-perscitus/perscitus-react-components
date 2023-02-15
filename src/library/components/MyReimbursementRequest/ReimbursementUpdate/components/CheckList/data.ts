export const list = [
    {
        id: "providerAddress",
        label: "Providers Name,  Address,  and Phone Number",
        disabled: false,
        checked: true
    },
    {
        id: "providerNPIName",
        label: "Provider NPI Number",
        disabled: false,
        checked: false
    },
    {
        id: "providerTAXIDName",
        label: "Provider TAX ID Number",
        disabled: false,
        checked: false
    },
    {
        id: "CPTCodes",
        label: "CPT Codes / Diagnosis Codes",
        disabled: false,
        checked: false
    },
    {
        id: "AmountCharged",
        label: "Amount Charged & Paid",
        disabled: false,
        checked: false
    },
    {
        id: "superBill",
        label: 'A Provider Issued UB04, 1500 form, also known as a "Super Bill"',
        disabled: false,
        checked: false
    },
    {
        id: "proof",
        label: 'Proof of Payment for Services',
        disabled: false,
        checked: false
    },
]

export const defaultState = (): Object => {
    return  list.reduce((acc, {id}) => ({ ...acc, [id]: false }), {});
}

const fieldProps = {
    minLength: 1,
    maxLength: 300,
}

export const modalFields = {
    "providerAddress": {
        title: "Providers Name, Address, and Phone Number",
        fields: [
            {
                ...fieldProps,
                className: "provider-name",
                value: "",
                title: "Provider Name",
                required: true,
            },
            {
                ...fieldProps,
                className: "provider-address",
                value: "",
                title: "Provider Address",
                required: true,
            },
            {
                ...fieldProps,
                className: "provider-phone-number",
                value: "",
                title: "Provider Phone Number",
                required: true,
            }
        ]
    },
    "providerNPIName": {
        title: "Provider NPI Number",
        fields: [
            {
                ...fieldProps,
                className: "Provider-npi-number",
                value: "",
                title: "Provider NPI Number",
                required: true,
            }]
    },
    "providerTAXIDName": {
        title: "Provider TAX ID Number",
        fields: [
            {
                ...fieldProps,
                className: "provider-TAXID-name",
                value: "",
                title: "Provider TAX ID Number",
                required: true,
            }]
    },
    "CPTCodes": {
        title: "CPT Codes / Diagnosis Codes",
        fields: [
            {
                ...fieldProps,
                className: "provider-cpt-codes",
                value: "",
                title: "CPT Codes / Diagnosis Codes",
                required: true,
            }]
    },
    "AmountCharged": {
        title: "Amount Charged & Paid",
        fields: [
            {
                ...fieldProps,
                className: "Amount Charged",
                value: "",
                title: "amount-charged",
                required: true,
            },
            {
                ...fieldProps,
                className: "Amount Paid",
                value: "",
                title: "amount-paid",
                required: true,
            }]
    },
    "superBill": {
        title: 'A Provider Issued UB04, 1500 form, also known as a "Super Bill"',
        component: null,
        
    }
}