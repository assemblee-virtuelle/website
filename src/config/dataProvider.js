import dataProvider from '../dataProvider/dataProvider';
import ontologies from './ontologies.json'

export default dataProvider({
	dataServers: {
		av: {
			name: 'Assemblée Virtuelle',
			baseUrl: 'https://data.virtual-assembly.org/',
			default: true
		},
	},
	resources: { 
		Project: {
	    types: ['pair:Project']
		},
		Organization: {
	    types: ['pair:Organization']
		},
		BlogPost: {
	    types: ['pair:Document'],
			list: {
				filter: {
					'pair:hasType': 'https://data.virtual-assembly.org/types/blogarticle'
				}
			}
		} 
	},
	ontologies,
	jsonContext: 'https://data.virtual-assembly.org/context.json',
});
