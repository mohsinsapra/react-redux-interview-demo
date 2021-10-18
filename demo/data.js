export const allData = [
    {
        GUID: "303094f6-7dcd-40c0-8b21-d34bf815d58f",
        Name: "Thomas",
        Status: "tandrews0@wikia.com",
        Gender: "Male",
        Address: "1212",
        ID: "86-(791)729-8384",
    },
    {
        GUID: "c0b6d242-bbcf-4a95-a59b-03a5db2a59ee",
        Name: "Henry",
        Status: "hmorales1@arstechnica.com",
        Gender: "Male",
        Address: "1231",
        ID: "48-(798)563-3652",
    },
];

export const halfData = allData.slice(0, 500);

export const treeData = {
    root: {
        id: -1,
        Name: "Root",
        children: [
            {
                id: 1,
                parentId: -1,
                Name: "Category 1",
                GUID: "8f7152dc-fed7-4a65-afcf-527fceb99865",
                Status: "hgardnero6@ed.gov",
                Gender: "Male",
                Address: "605 Manley Park",
                IDs: "31-(678)495-4134",
                children: [
                    {
                        id: 11,
                        parentId: 1,
                        Name: "Category 11",
                        GUID: "8f7152dc-fed7-4a65-afcf-527fceb991865",
                        Status: "hgardneross6@ed.gov",
                        Gender: "Male",
                        Address: "12 Manley Park",
                        ID: "31-(678)495-4134",
                    },
                    {
                        id: 12,
                        parentId: 1,
                        Name: "Category 12",
                        GUID: "8f7152dc-fed7-4acf-527fceb991865",
                        Status: "hgardneross6@ed.gov",
                        Gender: "Male",
                        Address: "12 Manley Park",
                        ID: "31-(678)495-4134",
                        children: [
                            {
                                id: 121,
                                parentId: 12,
                                Name: "Category 121",
                                GUID: "8f7q2dc-fedsss7-4acf-527fceb991865",
                                Status: "hgoss6@eds.gov",
                                Gender: "Male",
                                Address: "21 fake Park",
                                ID: "31-(678)495-4134",
                            },
                            {
                                id: 122,
                                parentId: 12,
                                Name: "Category 122",
                                GUID: "8f7q2dc-fed7-4acf-527fceb991865",
                                Status: "hgoss6@ed.gov",
                                Gender: "Male",
                                Address: "21 fake Park",
                                ID: "31-(678)495-4134",
                                children: [
                                    {
                                        id: 1221,
                                        parentId: 122,
                                        Name: "Category 1211",
                                        GUID: "8f7q2dc-facf-527fceb991865",
                                        Status: "hgossjdjdjdj6@ed.gov",
                                        Gender: "Male",
                                        Address: "21 fdjdjake Park",
                                        ID: "31-(678)495-4134",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 13,
                        parentId: 1,
                        GUID: "284c0699-b868-4c30-b12a-8d72079958a3",
                        Name: "Diane",
                        Status: "dphillipsrh@cam.ac.uk",
                        Gender: "Female",
                        Address: "4992 Anzinger Court",
                        ID: "355-(171)817-3888",
                    },
                    {
                        id: 14,
                        parentId: 1,
                        GUID: "47fb332b-102a-4521-b40e-b3d5ca14620b",
                        Name: "Lois",
                        Status: "lstoneri@timesonline.co.uk",
                        Gender: "Female",
                        Address: "488 Sachtjen Way",
                        ID: "351-(134)781-3030",
                    },
                    {
                        id: 15,
                        parentId: 1,
                        GUID: "68b4c1a2-e388-4970-b226-d49622531fbb",
                        Name: "Sharon",
                        Status: "shamiltonrj@yahoo.co.jp",
                        Gender: "Female",
                        Address: "81 Dottie Hill",
                        ID: "232-(410)229-9101",
                    },
                    {
                        id: 16,
                        parentId: 1,
                        GUID: "bb003723-bd3f-43f7-b247-5cfe2c005e9a",
                        Name: "Adam",
                        Status: "ashawrk@cargocollective.com",
                        Gender: "Male",
                        Address: "97846 Arrowood Trail",
                        ID: "62-(682)423-7816",
                    },
                    {
                        id: 17,
                        parentId: 1,
                        GUID: "5b6f3ca6-76fa-40c8-8571-5316d75d91c9",
                        Name: "Linda",
                        Status: "lwatkinsrl@tmall.com",
                        Gender: "Female",
                        Address: "1896 Forest Dale Point",
                        ID: "86-(818)985-7044",
                    },
                ],
            },
            {
                id: 2,
                parentId: -1,
                Name: "Category 2",
                GUID: "8f7q2dc-facf-527fcebdk=-jdjd991865",
                Status: "hehehe@ed.gov",
                Gender: "Male",
                Address: "212 Park",
                ID: "31-(678)495-4134",
                children: [
                    {
                        id: 21,
                        parentId: 2,
                        Name: "Category 21",
                        GUID: "8f7q2dc-facf-527fcsw-jdjd991865",
                        Status: "hehehe@ed.gov",
                        Gender: "Male",
                        Address: "21112 Park",
                        ID: "31-(678)495-4134",
                        leaf: false,
                    },
                ],
            },
        ],
    },
};
