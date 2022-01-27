exports.favoriteHobbiesBlock = {
	"type": "modal",
    "callback_id": "favorite_modal_submit",  
	"title": {
		"type": "plain_text",
		"text": "My App",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
            "block_id": "hobbies_block", 
			"text": {
				"type": "mrkdwn",
				"text": "What are you favorite hobbies."
			},
			"accessory": {
				"type": "checkboxes",
				"options": [
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Football*"
						},
						"value": "football"
					},
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Movies*"
						},
						"value": "movies"
					},
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Sleep*"
						},
						"value": "sleep"
					},
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Basketball*"
						},
						"value": "basketball"
					},
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Music*"
						},
						"value": "music"
					}
				],
				"action_id": "checkboxes_action"
			}
		}
	]
}


exports.radioBoxFeeling = {
    "response_type" : "in_channel",
    "blocks": [
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "Welcome. How are you doing",
				"emoji": true
			}
		},
        {
            "type": "actions",
            "block_id" : "feelings",
            "elements": [
                {
                    "type": "radio_buttons",
                    "options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Doing Well",
                                "emoji": true
                            },
                            "value": "doing_well"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Neutral",
                                "emoji": true
                            },
                            "value": "neutral"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Feeling Lucky",
                                "emoji": true
                            },
                            "value": "feeling_lucky"
                        }
                    ],
                    "action_id": "actionId-0"
                }
            ]
        }
    ]
}