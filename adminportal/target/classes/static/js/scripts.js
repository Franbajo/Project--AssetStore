/**
 * 
 */

$(document).ready(function() {
	$('.delete-asset').on('click', function (){
		/*<![CDATA[*/
	    var path = /*[[@{/}]]*/'remove';
	    /*]]>*/
		
		var id=$(this).attr('id');
		
		bootbox.confirm({
			message: "Are you sure to remove this asset? It can't be undone.",
			buttons: {
				cancel: {
					label:'<i class="fa fa-times"></i> Cancel'
				},
				confirm: {
					label:'<i class="fa fa-check"></i> Confirm'
				}
			},
			callback: function(confirmed) {
				if(confirmed) {
					$.post(path, {'id':id}, function(res) {
						location.reload();
					});
				}
			}
		});
	});
	
	
	
//	$('.checkboxAsset').click(function () {
//        var id = $(this).attr('id');
//        if(this.checked){
//            assetIdList.push(id);
//        }
//        else {
//            assetIdList.splice(assetIdList.indexOf(id), 1);
//        }
//    })
	
	$('#deleteSelected').click(function() {
		var idList= $('.checkboxAsset');
		var assetIdList=[];
		for (var i = 0; i < idList.length; i++) {
			if(idList[i].checked==true) {
				assetIdList.push(idList[i]['id'])
			}
		}
		
		console.log(assetIdList);
		
		/*<![CDATA[*/
	    var path = /*[[@{/}]]*/'removeList';
	    /*]]>*/
	    
	    bootbox.confirm({
			message: "Are you sure to remove all selected assets? It can't be undone.",
			buttons: {
				cancel: {
					label:'<i class="fa fa-times"></i> Cancel'
				},
				confirm: {
					label:'<i class="fa fa-check"></i> Confirm'
				}
			},
			callback: function(confirmed) {
				if(confirmed) {
					$.ajax({
						type: 'POST',
						url: path,
						data: JSON.stringify(assetIdList),
						contentType: "application/json",
						success: function(res) {
							console.log(res); 
							location.reload();
							debugger;
							},
						error: function(res){
							console.log(res); 
							location.reload();
							}
					});
				}
			}
		});
	});
	
	$("#selectAllAssets").click(function() {
		if($(this).prop("checked")==true) {
			$(".checkboxAsset").prop("checked",true);
		} else if ($(this).prop("checked")==false) {
			$(".checkboxAsset").prop("checked",false);
		}
	})
});