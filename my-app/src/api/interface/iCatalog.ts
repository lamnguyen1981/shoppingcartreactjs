export interface ICatagory {
    Id: number
    Name: string
    SeName: string
    NumberOfProducts: number
    IncludeInTopMenu: boolean
    SubCategories: ICatagory[]
    HaveSubCategories: boolean
    
  }