
function collect_same_elements(collection_a, object_b) {
	
	var collection_same_elements = {value: []};

	var k=0;


	for( var i=0; i < collection_a.length; i++ ){
		
		for( var j=0; j < object_b.value.length; j++ ){
		
			if( collection_a[i].key == object_b.value[j] ){
			
				collection_same_elements.value[k++] = object_b.value[j];
			
			}
		
		}
	
	} 

	return collection_same_elements.value;

}

module.exports = collect_same_elements;
