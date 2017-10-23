	
declare type ItemData = {
    name?: string,
    count?: number,
    stores?: Array<string>,
    tags?: Array<string>,
    starred?: boolean
}

declare type FilterData = {
    search?: string,
    tags?: Array<string>,
    sort?: {
        key?: string,
        by?: string
    },
    isFiltered?: boolean
}