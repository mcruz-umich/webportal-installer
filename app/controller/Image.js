
Ext.define('SpWebPortal.controller.Image', {
    extend: 'Ext.app.Controller',

    //localizable text...
    selectedImage: 'Selected Image',
    previewTitle: 'Preview (page {0} of {1})',
    //...localizable text
 

    init: function() {
	this.control({
	    'thumbnail': {
		selectionchange: this.onSelectionChange
	    },
	    '#spwpmainpagingtoolbar': {
		change: this.onPageChange
	    }
	});

	this.callParent(arguments);
    },

    onSelectionChange: function(dv, nodes) {
	var l = nodes.length,
        s = l !== 1 ? 's' : '';
	var v = dv.view;
	if (dv.getSelection().length > 0) {
	    /*
	    var img = dv.getSelection()[0];  //single selection
	    var imgView = v.up('panel').up('panel').down('image'); //not good enough for real-world
	    var pane = imgView.up('panel'); //not good enough for reality
	    //imgView.setSrc(this.getBaseUrl() + '/' + img.get('AttachmentLocation'));
	    imgView.setSrc(img.get('Src'));
	    var paneTitle = img.get('AttachedToDescr') + ' - ' + img.get('Title');
	    if (img.get('Width') != 0 && img.get('Height') != 0) {
		paneTitle +=  ' (' + img.get('Width') + ' x ' + img.get('Height') + ')';
	    } else {
		//I suspect that this will not consistently work. I don't think the setSrc method called
		//above is synchronous.
		paneTitle += ' (' + imgView.getWidth() + ' x ' + imgView.getHeight() + ')';
	    }
	    pane.setTitle(paneTitle);
	    */
	}
    },


    onPageChange: function(pager) {
	console.info('Image onPageChange()');
	var store = pager.getStore();
	var thumb = pager.up('tabpanel').down('spimageview').down('spthumbnail');
	thumb.up('panel').setTitle(Ext.String.format(this.previewTitle, store.currentPage, Math.ceil(store.getTotalCount()/store.pageSize)));
	//var imgView = pager.up('tabpanel').down('spimageview').down('image'); 
	//imgView.setSrc('');
	//var pane = imgView.up('panel');
	//pane.setTitle(this.selectedImage);
	//var imgStore = thumb.getStore();
	//imgStore.removeAll();
	
	var thbStore = thumb.getStore();
	thbStore.removeAll();
	var imgView = pager.up('tabpanel').down('spimageview');
	var imgStore = imgView.getImageStore();
	imgStore.removeAll();
	
	for (var r = 0; r < store.getCount(); r++) {
	    var rec = store.getAt(r);
	    imgView.addImgForSpecRec(rec);
	    /*var imgDef = rec.get('img');
	    if (imgDef != null && imgDef != '') {
		var imgs = Ext.JSON.decode(imgDef);
		for (var i = 0; i < imgs.length; i++) {
		    Ext.apply(imgs[i], {
			//AttachedTo: rec.getId(),
			AttachedTo: r,
			AttachedToDescr: rec.get('cn'),
			ThumbSrc: this.getImgSrc(imgs[i]['AttachmentLocation'], this.getPreviewScale(), 'KUFishvoucher'),
			Src: this.getImgSrc(imgs[i]['AttachmentLocation'], null, 'KUFishvoucher')
		    });
		}
		imgStore.add(imgs);
	    }*/
	}
	//pager.up('tabpanel').down('spimageview').down('pagingtoolbar').setVisible(imgStore.getTotalCount() > imgStore.pageSize);
	//thbStore.loadPage(1);
    }

})
