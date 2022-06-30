import {SelectInterface, SelectOptionInterface, TextInterface} from "../interfaces/input";

export const boosterInfos = [
  {
    name: 'redAndGreen',
    readableName: 'Red & Green',
    generation: 'Gen 1',
    boosterAsset: 'assets/boosters/Gen1/red-green.png',
    price: 50
  },
  {
    name: 'blue',
    readableName: 'Blue',
    generation: 'Gen 1',
    boosterAsset: 'assets/boosters/Gen1/blue.png',
    price: 50
  },
  {
    name: 'redAndBlue',
    readableName: 'Red & Blue',
    generation: 'Gen 2',
    boosterAsset: 'assets/boosters/Gen2/red-blue.png',
    price: 50
  },
  {
    name: 'goldAndSilver',
    readableName: 'Gold & Silver',
    generation: 'Gen 2',
    boosterAsset: 'assets/boosters/Gen2/gold-silver.png',
    price: 50
  },
  {
    name: 'crystal',
    readableName: 'Crystal',
    generation: 'Gen 2',
    boosterAsset: 'assets/boosters/Gen2/crystal.png',
    price: 50
  },
  {
    name: 'rubyAndSapphire',
    readableName: 'Ruby & Sapphire',
    generation: 'Gen 3',
    boosterAsset: 'assets/boosters/Gen3/ruby-sapphire.png',
    price: 50
  },
]

export const boostersSelect: SelectInterface = {
  name: 'boosterSelect',
  label: "Booster Edition",
  options: boosterInfos.map((info): SelectOptionInterface => {
    return {
      value: info.name,
      optionPrimaryInfo: info.generation,
      optionSecondaryInfo: info.readableName
    }
  })
};

export const quantityInput: TextInterface = {
  name: 'orderQuantity',
  label: 'Order Quantity',
  placeholder: 'Quantity',
  prefix: {
    isIcon: true,
    element: 'payments'
  },
  suffix: {
    isIcon: false,
    element: '50 $'
  },
  textType: 'number'
}
