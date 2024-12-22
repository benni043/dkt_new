import type {Extra} from "~/util/types";

interface CompanyCardStoreState {
    cards: Extra[];
}

export const useCompanyCardStore = defineStore("companyCard", {
    state: (): CompanyCardStoreState => ({
        cards: [
            {
                id: 34,
                type: "Betrieb",
                name: "Flugl. Wien-Venedig",
            },
            {
                id: 14,
                type: "Betrieb",
                name: "Seilbahn",
            },
            {
                id: 4,
                type: "Betrieb",
                name: "Elektr. Kraftwerk",
            }
        ]
    })
})