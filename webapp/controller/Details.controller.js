sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.birla.fiBirlaTaxReportApplication.controller.Details", {
	    
	    onInit:function(){
	        var that = this;
	        var oModel = this.getOwnerComponent().getModel();
	        var oUrl = "/emp_detailsSet('1061')";
	        oModel.read(oUrl,{
	            
	            success:function(response){
	                var data = response.results;
	            },
	            error:function(error){
	                console.log(error);
	            }
	        });
	    }

	});
});