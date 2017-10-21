	
declare type ItemData = {
    name?: string,
    count?: number,
    stores?: Array<string>,
    tags?: Array<string>,
}

declare type FilterData = {
    search?: string,
    tags?: Array<string>
}