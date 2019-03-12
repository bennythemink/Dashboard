# DeliveryDashboard

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### JSON 

Current valid JSON is below. Use https://jsonlint.com to validate changes.


<!-- Projects -->
<!-- http://www.mocky.io/v2/5c7786fa30000059009d62d1 -->
[{
    	"code": 1,
		"client": "Apple",
		"name": "Watch App",
		"hoursAllocated": 100,
		"hoursUsed": 90,
		"onTrack": 3, // 0 = on track, 1 = behind, 2 = on hold, 3 = N/A
		"billableHours": 90,
		"projectType": 0, // 0 = app, 1 = website, 2 = N/A
		"projectStage": 0, // 0 = SOW, 1 = design, 2 = dev, 3 = beta, 4 = uat, 5 = warranty
		"clientHappiness": = 2 // 0 = unhappy, 1 = OK, 2 = happy 
	},
	{
		"code": 2,
		"client": "Tesla",
		"name": "Car App",
		"hoursAllocated": 200,
		"hoursUsed": 100,
		"onTrack": 2,
		"billableHours": 90,
		"projectType": 0,
		"projectStage": 2
	}
]

<!-- Staff Utilisation -->
<!-- http://www.mocky.io/v2/5c6e6b493400005500892c38 -->
[{
    	"id": 1,
		"title": "All Staff",
		"percentage": 90
	},
	{
		"id": 2,
		"title": "John Vaughan",
		"percentage": 45
	},
	{
		"id": 3,
		"title": "Benny Sheerin",
		"percentage": 10
	},
	{
		"id": 4,
		"title": "Andrew Nikakis",
		"percentage": 80
	},
	{
		"id": 5,
		"title": "Dave Pecker",
		"percentage": 75
	}
]

<!-- Invoices -->
<!-- http://www.mocky.io/v2/5c6fd91638000079003fca09 -->
[{
    	"id": 1,
		"client": "Apple",
		"amount": "$1,000,000",
		"due": "1st April 2019",
		"sent": "20th Feb 2019",
		"paid": true
	},
	{
		"id": 1,
		"client": "Telstra",
		"amount": "$900,000",
		"due": "1st April 2019",
		"sent": "20th Feb 2019",
		"paid": true
	},
	{
		"id": 1,
		"client": "Tesla",
		"amount": "$2,000,000",
		"due": "1st April 2019",
		"sent": "20th Feb 2019",
		"paid": true
	},
	{
		"id": 1,
		"client": "Slack",
		"amount": "$400,000",
		"due": "1st April 2019",
		"sent": "20th Feb 2019",
		"paid": true
	},
	{
		"id": 1,
		"client": "NASA",
		"amount": "$23,000",
		"due": "1st April 2019",
		"sent": "20th Feb 2019",
		"paid": true
	},
	{
		"id": 1,
		"client": "Samsung",
		"amount": "$1,000",
		"due": "1st April 2019",
		"sent": "20th Feb 2019",
		"paid": true
	}
]

<!-- Happiness -->
<!-- http://www.mocky.io/v2/5c6f8d693400001059893126 -->

[{
    	"id": 1,
		"title": "Overall Happiness",
		"lastMonth": 0,
		"thisMonth": 2
	},
	{
		"id": 1,
		"title": "Overall Happiness",
		"lastMonth": 0,
		"thisMonth": 2
	},
	{
		"id": 1,
		"title": "Overall Happiness",
		"lastMonth": 0,
		"thisMonth": 2
	}
]