export interface categoriesType {
  id: string,
  name: string,
}

export interface eventType {
  imgUrl: string,
  name: string,
}

export interface optionItemsType {
  displayName: string,
  optionQuantityLimit: number,
  price: number,
}

export interface optionGroupsType {
  name: string,
  require: boolean,
  selectedOptionLimit: number,
  optionItems: optionItemsType[],
}

export interface serviceItemsType {
  id: string,
  name: string,
}

export interface storeType {
  id: string,
  logoURL: string,
  name: string,
}

export interface subCategoriesType {
  id: string,
  name: string,
  parentCategoriesCodes: string[],
}

export interface tableType {
  id: string,
  title: string,
}

export interface goodsType {
  belongToCategories: string[],
  best: boolean,
  description: string,
  hit: boolean,
  id: string,
  image: string,
  name: string,
  new: boolean,
  optionGroups: optionGroupsType[],
  orderMaxQuantity: number,
  orderMinQuantity: number,
  price: number,
  recommend: boolean,
  soldOut: boolean,
}

export interface mainDataType {
categories: categoriesType[],
event: eventType[],
goods: goodsType[],
serviceItems: serviceItemsType[],
store: storeType,
subCategories: subCategoriesType[],
table: tableType,
version: string,
}

export interface locationType {
  id: string,
  top: number,
  bottom: number,
}

export interface customCategory {
  id: string,
  name: string,
  subCategories: subCategoriesType[],
}

export interface customSubCategories {
  id: string,
  name: string,
  parentCategoriesCodes: string[],
  categoryName: string,
}
