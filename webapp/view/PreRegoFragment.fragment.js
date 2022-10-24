sap.ui.jsfragment("SMADJS.view.PreRegoFragment", {
	createContent: function(oController) {

		var oText1 = new sap.m.Text({
			text:"Registration for SMAD Camp 2023 is now full."
		});

		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});

		var oPreRegoPage = new sap.m.Page({
			title:"{i18n>appTitle}",
			content: [oPanel],
			showFooter:false,
			showNavButton:false
		});

		return [oPreRegoPage];
	}
});
