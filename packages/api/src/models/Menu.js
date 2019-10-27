import { Schema, model } from 'mongoose'

const { ObjectId } = Schema.Types

const PropertyItemSchema = new Schema({
	name: { required: true, type: String },
	basePrice: { required: true, type: Number }
}, { _id: false })

const PropertySchema = new Schema({
	type: { required: true, type: String }, // selectlist veya checkbox
	basePrice: { required: true, type: Number },
	name: { required: true, type: String },
	isRequired: { required: true, type: Boolean },
	items: [PropertyItemSchema]
})

const ProductSchema = new Schema({
	name: { required: true, type: String },
	description: String,
	isEnable: { required: true, type: Boolean },
	basePrice: { required: true, type: Number },
	properties: [PropertySchema]
}, { _id: false })

const ProductGroupsSchema = new Schema({
	name: { required: true, type: String },
	description: String,
	products: [ProductSchema]
}, { _id: false })

/**
 * const menu = {
	restaurantId: ObjectId('12312312'),
	productGroups: [{
		name: 'Appetizers',
		products: [{
			name: 'Buffalo Wings',
			description: 'Served with celery, carrots, and bleu cheese dressing.',
			isEnable: true,
			basePrice: 0,
			properties: [{
				name: 'Size',
				type: 'selectlist',
				basePrice: 0,
				isRequired: true,
				items: [{
					name: '6 Pieces',
					basePrice: 5.99
				},
				{
					name: '12 Pieces',
					basePrice: 9.99
				}]
			}, {
				name: 'Wing Sauce',
				type: 'selectlist',
				basePrice: 0,
				isRequired: false,
				items: [{
					name: 'Hot',
					basePrice: 0
				}, {
					name: 'BBQ',
					basePrice: 0
				}]
			}]
		}]
	}, {
		name: 'Salads',
		description: 'All salads served with our homemade dinner roll, butter and dressing on the side.',
		products: [{
			name: 'Milford Salad',
			description: 'House salad loaded with bacon, cheddar, turkey, hard boiled egg, avocado with balsamic dressing.',
			basePrice: 8.99,
			properties: [{
				name: 'Add Extra Dressing for $0.59',
				type: 'checkbox',
				basePrice: 0.59,
				isRequired: false
			},{
				name: 'Dressing Options',
				type: 'selectlist',
				basePrice: 0,
				isRequired: true,
				items: [{
					name: 'Balsamic',
					basePrice: 0
				}]
			}]
		}]
	}]
}
 */
export const MenuSchema = new Schema({
	restaurantId: { required: true, type: ObjectId },
	productGroups: [ProductGroupsSchema]
})

export default model('Menu', MenuSchema)
