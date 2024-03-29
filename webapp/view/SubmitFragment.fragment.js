sap.ui.jsfragment("SMADJS.view.SubmitFragment", {
	createContent: function(oController) {

		var oText1 = new sap.m.Text({
			text:oController.message
		});

		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});

		if (oController.status === 200) {
			// No longer want to provide bank details and immediately have people registered
			// var text2 = "Congratulations you are now registered. Please pay within the week or your spot may be offered to another family. Cost is $80/child for the week. Payment details:\n\n" +
			// "Account Name: CANBERRA BAPTIST CHURCH - SMAD CAMP\nBSB: 062 901\nAccount Number: 1021 7815\nReference: Your child/ren's last name" +
			// "\n\nYou will receive an email in the next 24 hours. Please do not contact SMAD CAMP before then.";

			// new message for SMAD 2023
//			var text2 = "Thank you for submitting your form. You are now registered for SMAD Camp 2023."
			var text2 = "Thank you for submitting your form. Your registration is pending.";
			var text3 = "We will be working as fast as we can to process forms and you will hear from us as soon as possible.";
			var text4 = "Emails will be sent informing you of whether you received a place or were waitlisted.";
			var text5 = "We strongly encourage you not to contact SMAD Camp during this time to receive any updates as this slows down the process.";
			var text6 = "Payment details will be sent out if you receive a place. Do not pay until you receive this email.";

		} else if (oController.status === 201) {

			// new message for SMAD 2022
			var text2 = "Thank you for submitting your form. SMAD Camp 2023 is full. You have been waitlisted.";

//			text2 = "You will be contacted if a place becomes available.";
		}	else {
			text2 = "Error. Please email smadcamp@hotmail.com";
		}

		var oText2 = new sap.m.Text({
			text:text2
		});

		var oPanel2 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText2]
		});

		var oText3 = new sap.m.Text({
			text:text3
		});

		var oPanel3 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText3]
		});

		var oText4 = new sap.m.Text({
			text:text4
		});

		var oPanel4 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText4]
		});

		var oText5 = new sap.m.Text({
			text:text5
		});

		var oPanel5 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText5]
		});

		var oText6 = new sap.m.Text({
			text:text6
		});

		var oPanel6 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText6]
		});

		switch (oController.status) {
			case 200: title = "Form Submitted";
				break;
//			case 201: title = "Waitlisted Successfully";
// SMAD 2023
				case 201: title = "Form Submitted";
				break;
			default: title = "Registration Error";
				break;
		};
		//var title = (oController.status === 200) ? "Registration Successful" : "Registration Error";

		var oSubmitPage = new sap.m.Page({
			title:title,
			content: [oPanel2,oPanel3,oPanel4,oPanel5,oPanel6],
			showNavButton:false
		});

		return [oSubmitPage];
	}
});
