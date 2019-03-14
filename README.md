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
<!-- http://www.mocky.io/v2/5c8994062f0000255dec9872 -->
[{
    	"id": 1,
		"client": "Apple",
		"name": "Watch App",
		"hoursAllocated": 100,
		"hoursUsed": 90,
		"onTrack": 3, // options are: On Track, Behind, On Hold
		"billableHours": 90,
		"dueDate": "Monday, 1st April",
		"projectType": 0, // App, Website, N/A
		"projectStage": 0, // SOW, Design, Development, Beta, UAT, Warranty
		"clientHappiness": = 2 // Unhappy, Moderate, Happy 
	},
	{
		"id": 2,
		"client": "Tesla",
		"name": "Car App",
		"hoursAllocated": 200,
		"hoursUsed": 100,
		"onTrack": 2,
		"billableHours": 90,
		"dueDate": "Monday, 1st April",
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
<!-- http://www.mocky.io/v2/5c88213a3200007e0f3bd6b2 -->
[
    {
        "clientID": 1,
        "client": "Apple",
        "invoices": [
            {
                "id": 1,
                "amount": "$1,000,000",
                "due": "1st April 2019",
                "sent": "20th Feb 2019",
                "paid": true
            }
        ]
    },
    {
        "clientID": 2,
        "client": "Samsung",
        "invoices": [
            {
                "id": 3,
                "amount": "$1,000,000",
                "due": "1st April 2019",
                "sent": "20th Feb 2019",
                "paid": true
            },
            {
                "id": 4,
                "amount": "$10,000",
                "due": "1st April 2019",
                "sent": "20th Feb 2019",
                "paid": false
            }
        ]
    },
    {
        "clientID": 3,
        "client": "Telstra",
        "invoices": [
            {
                "id": 5,
                "amount": "$1,000,000",
                "due": "1st April 2019",
                "sent": "20th Feb 2019",
                "paid": false
            },
            {
                "id": 6,
                "amount": "$10,000",
                "due": "1st April 2019",
                "sent": "20th Feb 2019",
                "paid": false
            },
            {
                "id": 7,
                "amount": "$1,000,000",
                "due": "1st April 2019",
                "sent": "20th Feb 2019",
                "paid": false
            },
            {
                "id": 8,
                "amount": "$10,000",
                "due": "1st April 2019",
                "sent": "20th Feb 2019",
                "paid": false
            }
        ]
    }
]