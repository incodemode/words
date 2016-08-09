{
	"mappings": {
		"es_word": { 
			"_all":       { "enabled": false  }, 
			"properties": { 
				"name":    { "type": "string"  }, 
				"slug":     { 
					"type": "string",
					"index": "not_analyzed"
				}, 
				"definition": { "type": "string"  }, 
				"synonyms": { "type": "string"  }, 
				"ili":     { 
					"type": "string",
					"index": "not_analyzed"
				}, 
				"offset":     { 
					"type": "string",
					"index": "not_analyzed"
				}, 
				"translations_en": {
					"type": "nested", 
          			"properties": {
			            "offset":    { 
			            	"type": "string",
							"index": "not_analyzed"
			            },
			            "title": { 
			            	"type": "string"  
			            },
			            "lang":     { 
			            	"type": "string",
							"index": "not_analyzed"
						}
			        }
			    }, 
				"related_words_en": {
					"type": "nested", 
          			"properties": {
			            "offset":    { 
			            	"type": "string",
							"index": "not_analyzed"
			            },
			            "title": { 
			            	"type": "string"  
			            },
			            "lang":     { 
			            	"type": "string",
							"index": "not_analyzed"
						}
			        }
			    }
			}
		}
    }
}
