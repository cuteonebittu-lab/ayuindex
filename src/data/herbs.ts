import { Herb, SingleHerb } from '../types/ayurveda';
import herbsData from '../../data/herbs_dataset.json';

const singleHerbs: SingleHerb[] = herbsData;

export const herbs: Herb[] = singleHerbs.map((herb) => ({
  id: herb.HerbName.toLowerCase().replace(' ', '-'),
  name: herb.HerbName,
  sanskritName: herb.HerbName,
  botanicalName: herb.BotanicalName,
  family: '', // Not available in the new data
  parts: [herb.PartsUsed],
  rasa: herb.Rasa,
  guna: herb.Guna,
  virya: herb.Virya,
  vipaka: herb.Vipaka,
  karma: herb.Karma,
  prabhava: herb.Prabhava,
  indications: herb.Indications,
  typicalDosage: {
    powder: herb.Dosage,
  },
  brandsAndPrices: herb.Brands.map((brand) => ({
    brand: brand.BrandName,
    sku_title: `${brand.CompanyName} ${brand.BrandName} ${brand.PackageSize}`,
    pack_size: brand.PackageSize,
    price_inr: Number(brand.Price.replace('₹', '')),
    retailer: brand.CompanyName,
    product_url: '',
  })),
}));

export { singleHerbs };
