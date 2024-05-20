(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anime9_atlas_1", frames: [[0,0,2048,2048]]},
		{name:"anime9_atlas_2", frames: [[0,0,1024,2048]]},
		{name:"anime9_atlas_3", frames: [[0,0,1024,1024]]},
		{name:"anime9_atlas_4", frames: [[0,0,1024,1024]]},
		{name:"anime9_atlas_5", frames: [[0,0,1024,1024]]},
		{name:"anime9_atlas_6", frames: [[0,0,1024,1024]]},
		{name:"anime9_atlas_7", frames: [[0,0,1024,1024]]},
		{name:"anime9_atlas_8", frames: [[0,0,1024,1024]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(ss["anime9_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["anime9_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["anime9_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["anime9_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["anime9_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(ss["anime9_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["anime9_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["anime9_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsGMHIAA4NIYNAAIAAYNg");
	mask.setTransform(77.525,77.525);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1514,0.1514);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhUBWIAAirICpAAIAACrg");
	mask.setTransform(8.525,8.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52946D").s().p("AAcBSIghgkQgGgHgIAEQgTAKggAOQgCgDAEgFIAXgrQAFgIgHgGQgTgSgOgQQgEgFAAgCQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIADABIAuAJQAMADAEgLIAVgpQAEgGADAAIAGAwQACAOABACQACABAOADIAnAHQAGABACADIgNAGIgPAHIgWAKQgJAEACAJIAGAzIAAAFIAAAAQgDAAgDgEg");
	this.shape.setTransform(8.525,8.6025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,17.1,17.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AheBeIAAi7IC9AAIAAC7g");
	mask_1.setTransform(9.5,9.35);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B5390").s().p("AAoBZIgogkQgHgHgIAGIguAaQgGAEgDgBQgBgCADgGIAWgvQADgGgBgEQgBgFgGgEIgmghQgFgFAAgEIA1AGQAQACACgCQABgBAHgPIARgnQACgIAEgBIAIAiIAFAbQACAKALABIA4AGIAFABQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAIgEACIgvAaQgIAFACAKQAHAfAEAdIAAABQgDAAgEgFg");
	this.shape_1.setTransform(9.5,9.3525);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,19,18.7), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhqBnIAAjNIDVAAIAADNg");
	mask_2.setTransform(10.65,10.275);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#46919E").s().p("AgLBDIgKgcQgEgLgLAAIg/ADIgGAAQgBgDACgCIAEgDIAwgkQAIgHgEgLIgXhAQADgCAGAFIAyAhQAKAGAHgHIAuglQAHgFACAAQACACgBADIgBAFIgQA3QgFAOANAHIAvAeQAHAEABAEIgrACIgRABQgRAAgDACQgBACgFASIgNAuQgDAIgDACIgNgkg");
	this.shape_2.setTransform(10.645,10.275);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,21.3,20.6), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiaCVIAAkpIE0AAIAAEpg");
	mask_3.setTransform(15.45,14.925);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6FB0BA").s().p("AgHB8IgJgaQgMgdgDgNQgFgPgRAAIhcAEIgIAAQgBgFADgCIAGgFIBFg1QAHgGACgFQABgGgDgIQgMgcgWhCQAEgCADACIAGAEQAxAgAYARQANAKAMgMIBDg1IAFgFQAEgDADABQADADgBAEIgDAHQgOA4gIAYQgEAKADAHQACAHAKAGIBGAsIAGAEQADADABAFIhWAEQgaABgDADQgCABgIAbIgSBDIgCAIQgCAEgEACQgFgKgGgPg");
	this.shape_3.setTransform(15.4464,14.9208);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,30.9,29.9), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiAB8IAAj3IEBAAIAAD3g");
	mask_4.setTransform(12.875,12.475);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A13726").s().p("AgGBnIgIgWIgMgiQgEgNgOAAIhNAEIgHgBQAAgEACgCIAFgDQAhgcAYgRQAGgEACgFQABgEgDgHIgchPQADgBADABIAFAEIA9AoQALAIAJgJIA4gtQAHgGAEABQACACgBAEIgCAFQgPA2gEANQgDAJACAFQACAGAIAFIA6AlIAFADQADACABAFIgzACIgVABQgWABgCACQgCACgGAVIgQA4IgBAHQgCADgDACQgEgIgFgNg");
	this.shape_4.setTransform(12.8708,12.4731);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0.1,25.8,24.799999999999997), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgjtAjuMAAAhHbMBHbAAAMAAABHbg");
	mask_1.setTransform(228.625,228.625);

	// Layer_3
	this.instance_1 = new lib.Image_7();
	this.instance_1.setTransform(0,0,0.4466,0.4466);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,457.3,457.3), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A9hdiMAAAg7DMA7DAAAMAAAA7Dg");
	mask_2.setTransform(188.95,188.975);

	// Layer_3
	this.instance_2 = new lib.Image_6();
	this.instance_2.setTransform(0,0,0.3691,0.3691);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,377.9,378), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtWAtXMAAAhatMBatAAAMAAABatg");
	mask.setTransform(290.3,290.3);

	// Layer_3
	this.instance = new lib.Image_5();
	this.instance.setTransform(0,0,0.2835,0.2835);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,580.6,580.6), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aucc5MAAAg5xIc4AAMAAAA5xg");
	mask_1.setTransform(92.45,184.9);

	// Layer_3
	this.instance_1 = new lib.Image_4();
	this.instance_1.setTransform(0,0,0.1806,0.1806);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,184.9,369.8), null);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AozI0IAAxnIRnAAIAARng");
	mask_3.setTransform(56.4,56.4);

	// Layer_3
	this.instance_3 = new lib.Image_3();
	this.instance_3.setTransform(0,0,0.1102,0.1102);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(0,0,112.8,112.8), null);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AogIhIAAxBIRBAAIAARBg");
	mask_4.setTransform(54.45,54.45);

	// Layer_3
	this.instance_4 = new lib.Image_2();
	this.instance_4.setTransform(0,0,0.1063,0.1063);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(0,0,108.9,108.9), null);


(lib.ClipGroup_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AsyMzIAA5lIZlAAIAAZlg");
	mask_5.setTransform(81.9,81.9);

	// Layer_3
	this.instance_5 = new lib.Image_1();
	this.instance_5.setTransform(0,0,0.16,0.16);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_5, new cjs.Rectangle(0,0,163.8,163.8), null);


(lib.yildiz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(12.8,12.45,1,1,0,0,0,12.8,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yildiz, new cjs.Rectangle(0,0,25.8,24.9), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(8.5,8.6,1,1,0,0,0,8.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,17.1,17.2), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(9.5,9.3,1,1,0,0,0,9.5,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,19,18.7), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(10.7,10.2,1,1,0,0,0,10.7,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,21.3,20.6), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(15.5,14.9,1,1,0,0,0,15.5,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,30.9,29.9), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AoSI2QjdjPgXkuIAAhxQAWkpDYjOQDZjPEsgIIAlAAQCbAFCNA9QCIA9BoBrQBoBrA6CJQA6COAACaQABCdg+CRQg6CLhrBrQhsBriMA6QiPA+idgBQkyABjgjRg");
	mask_5.setTransform(77.45,77.45);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,154.9,154.9), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EgN4Ag5Qmbitk7k8Qk9k8iumbQizmoAAnRQAAnQCzmoQCumbE9k7QE7k9GbiuQGoizHQAAQHQAAGpCzQGaCuE9E9QE8E7CtGbQC0GoAAHQQAAHRi0GoQitGbk8E8Qk9E8maCtQmpC0nQAAQnQAAmoi0g");
	mask_6.setTransform(228.5,228.5);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(228.7,228.7,1,1,0,0,0,228.7,228.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,457,457), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgrdiQl5gJlXiYQlMiTj+kEQkAkFiLlPQiRlbAAl7QABl/CUlfQCQlTEFkGQEFkGFUiPQFfiVGAAAQF6AAFcCRQFOCLEFD/QEED/CTFMQCYFXAJF5IAABYQgJF0iTFSQiQFIj+D+Qj9D+lICPQlTCTlzAJg");
	mask_7.setTransform(188.95,188.975);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.setTransform(189,189,1,1,0,0,0,189,189);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,377.9,378), null);


(lib.ClipGroup_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AogUKQj7hqjCjCQjBjChrj7QhukFAAkcQAAkcBukEQBrj8DBjBQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDBBqD8QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDCj7BqQkEBukdAAQkcAAkEhug");
	mask_6.setTransform(191.2,189.55);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_1_1();
	this.instance_6.setTransform(290.3,290.3,1,1,0,0,0,290.3,290.3);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_6, new cjs.Rectangle(51.2,49.6,280,280), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("EgtWAtXMAAAhatMBatAAAMAAABatg");
	mask_8.setTransform(290.3,290.3);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_0_6();
	this.instance_3.setTransform(290.3,290.3,1,1,0,0,0,290.3,290.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,580.6,580.6), null);


(lib.ClipGroup_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AlgNEQijhEh+h+Qh9h+hFijQhHipAAi4QAAi4BHioQBFijB9h9QB+h+CjhFQCphHC3gBQC4ABCqBHQCiBFB+B+QB+B9BECjQBHCoABC4QgBC4hHCpQhECjh+B+Qh+B+iiBEQiqBHi4AAQi3AAiphHg");
	mask_7.setTransform(91.55,91.6);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_1_2();
	this.instance_7.setTransform(92.5,184.9,1,1,0,0,0,92.5,184.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_7, new cjs.Rectangle(0.8,0.9,181.5,181.5), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("Aucc5MAAAg5xIc4AAMAAAA5xg");
	mask_9.setTransform(92.45,184.9);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_0_7();
	this.instance_4.setTransform(92.5,184.9,1,1,0,0,0,92.5,184.9);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,184.9,369.8), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AmIGJQijijAAjmQAAjlCjijQCjiiDlAAQDmAACjCiQCjCjAADlQAADmijCjQiiCijnAAQjlAAijiig");
	mask_10.setTransform(56.475,56.475);

	// Layer_3
	this.instance_5 = new lib.ClipGroup_0_3();
	this.instance_5.setTransform(56.4,56.4,1,1,0,0,0,56.4,56.4);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0.9,1,111.19999999999999,111), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	mask_11.graphics.p("Al7F7QididABjeQgBjdCdidQCdidDeAAQDeAACdCdQCeCdAADdQAADeieCdQidCdjeAAQjeAAididg");
	mask_11.setTransform(54.25,54.475);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_0_4();
	this.instance_6.setTransform(54.5,54.5,1,1,0,0,0,54.5,54.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0.6,0.9,107.30000000000001,107.19999999999999), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	mask_12.graphics.p("Ak5LnQiRg9hvhwQhwhvg9iRQhAiWAAikQAAijBAiVQA9iSBwhvQBvhwCRg8QCWhACjAAQCkAACWBAQCRA8BwBwQBvBvA9CSQBACVAACjQAACkhACWQg9CRhvBvQhwBwiRA9QiWA/ikAAQijAAiWg/g");
	mask_12.setTransform(81.875,81.9);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_0_5();
	this.instance_7.setTransform(81.9,81.9,1,1,0,0,0,81.9,81.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(1.2,1.3,161.4,161.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.kisi9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(82.55,82.55,0.3606,0.3606,0,0,0,229,229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi9, new cjs.Rectangle(0,0,164.9,164.9), null);


(lib.kisi8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(55.5,55.45,1,1,0,0,0,56.4,56.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi8, new cjs.Rectangle(-0.9,-0.9,112.9,112.80000000000001), null);


(lib.kisi6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(91.7,184.05,1,1,0,0,0,92.5,184.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi6, new cjs.Rectangle(-0.8,-0.8,184.9,369.8), null);


(lib.kisi5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(159.8,160.9,0.6683,0.6683,0,0,0,290.3,290.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi5, new cjs.Rectangle(-34.2,-33.1,388,388), null);


(lib.kisi4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(59.65,59.6,0.7396,0.7396,0,0,0,81.9,81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi4, new cjs.Rectangle(-0.9,-0.9,121.2,121.10000000000001), null);


(lib.kisi3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(63,63.05,0.3331,0.3331,0,0,0,189.2,189.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi3, new cjs.Rectangle(0,0,125.9,125.9), null);


(lib.kisi2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_11();
	this.instance.setTransform(70,69.65,1.2993,1.2993,0,0,0,54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi2, new cjs.Rectangle(-0.8,-1.1,141.5,141.5), null);


(lib.kisi1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi1, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.kisi10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kisi6();
	this.instance.setTransform(91.7,184.1,1,1,0,0,0,91.7,184.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi10, new cjs.Rectangle(-0.8,-0.8,184.9,369.8), null);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(237.4,259.8,0.3567,0.3567,0,0,0,8.4,8.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({_off:false},0).wait(1).to({regX:8.5,regY:8.6,scaleX:0.7965,scaleY:0.7965,x:235.35,y:282.85},0).wait(1).to({scaleX:1.2362,scaleY:1.2362,x:233.35,y:305.9},0).wait(1).to({scaleX:1.676,scaleY:1.676,x:231.35,y:328.9},0).wait(1).to({scaleX:2.1157,scaleY:2.1157,x:229.35,y:351.9},0).wait(1).to({scaleX:2.5555,scaleY:2.5555,x:227.3,y:374.95},0).wait(1).to({scaleX:2.9952,scaleY:2.9952,x:225.3,y:397.95},0).wait(1).to({scaleX:3.435,scaleY:3.435,x:223.25,y:420.95},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(231.75,263.1,0.3842,0.3842,0,0,0,9.3,9.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).wait(1).to({regX:9.5,regY:9.3,scaleX:0.8579,scaleY:0.8579,x:214.05,y:273.25},0).wait(1).to({scaleX:1.3315,scaleY:1.3315,x:196.25,y:283.35},0).wait(1).to({scaleX:1.8052,scaleY:1.8052,x:178.45,y:293.45},0).wait(1).to({scaleX:2.2788,scaleY:2.2788,x:160.7,y:303.55},0).wait(1).to({scaleX:2.7525,scaleY:2.7525,x:142.9,y:313.7},0).wait(1).to({scaleX:3.2261,scaleY:3.2261,x:125.1,y:323.8},0).wait(1).to({scaleX:3.6998,scaleY:3.6998,x:107.3,y:333.9},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(242.35,263.75,0.3158,0.3158,0,0,0,9.5,9.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98).to({_off:false},0).wait(1).to({scaleX:0.7051,scaleY:0.7051,x:263.1,y:279.2},0).wait(1).to({scaleX:1.0944,scaleY:1.0944,x:283.9,y:294.75},0).wait(1).to({scaleX:1.4837,scaleY:1.4837,x:304.7,y:310.25},0).wait(1).to({scaleX:1.873,scaleY:1.873,x:325.45,y:325.75},0).wait(1).to({scaleX:2.2623,scaleY:2.2623,x:346.25,y:341.3},0).wait(1).to({scaleX:2.6516,scaleY:2.6516,x:367.05,y:356.8},0).wait(1).to({scaleX:3.0409,scaleY:3.0409,x:387.85,y:372.35},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(227.75,252.2,0.5821,0.5821,0,0,0,10.5,10.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).wait(1).to({regX:10.7,regY:10.3,scaleX:1.0404,scaleY:1.0868,x:206.7,y:237.25},0).wait(1).to({scaleX:1.4986,scaleY:1.5915,x:185.5,y:222.25},0).wait(1).to({scaleX:1.9569,scaleY:2.0962,x:164.3,y:207.25},0).wait(1).to({scaleX:2.4151,scaleY:2.6009,x:143.1,y:192.3},0).wait(1).to({scaleX:2.8734,scaleY:3.1056,x:121.9,y:177.3},0).wait(1).to({scaleX:3.3316,scaleY:3.6102,x:100.75,y:162.3},0).wait(1).to({scaleX:3.7899,scaleY:4.1149,x:79.55,y:147.35},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(247.9,257.55,0.2454,0.2454,0,0,0,15.5,14.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).wait(1).to({regX:15.4,regY:14.9,scaleX:0.548,scaleY:0.548,x:271.3,y:255.25},0).wait(1).to({scaleX:0.8505,scaleY:0.8505,x:294.75,y:253},0).wait(1).to({scaleX:1.153,scaleY:1.153,x:318.2,y:250.8},0).wait(1).to({scaleX:1.4556,scaleY:1.4556,x:341.65,y:248.55},0).wait(1).to({scaleX:1.7581,scaleY:1.7581,x:365.1,y:246.3},0).wait(1).to({scaleX:2.0607,scaleY:2.0607,x:388.55,y:244.05},0).wait(1).to({scaleX:2.3632,scaleY:2.3632,x:412,y:241.8},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_5 = new lib.yildiz();
	this.instance_5.setTransform(240.05,252.25,0.4961,0.4961,0,0,0,12.8,12.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:12.9,regY:12.4,scaleX:1.1077,scaleY:1.1077,x:250.75,y:232.65},0).wait(1).to({scaleX:1.7194,scaleY:1.7194,x:261.45,y:213.1},0).wait(1).to({scaleX:2.331,scaleY:2.331,x:272.05,y:193.6},0).wait(1).to({scaleX:2.9426,scaleY:2.9426,x:282.75,y:174.05},0).wait(1).to({scaleX:3.5542,scaleY:3.5542,x:293.4,y:154.5},0).wait(1).to({scaleX:4.1658,scaleY:4.1658,x:304.1,y:135},0).wait(1).to({scaleX:4.7774,scaleY:4.7774,x:314.75,y:115.45},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_6 = new lib.kisi9();
	this.instance_6.setTransform(249.7,239.2,0.0443,0.0443,0,0,0,79.1,79.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).wait(1).to({regX:82.4,regY:82.4,scaleX:0.059,scaleY:0.059,x:249.6,y:239.95},0).wait(1).to({scaleX:0.0742,scaleY:0.0742,x:249.35,y:240.65},0).wait(1).to({scaleX:0.0898,scaleY:0.0898,x:249.15,y:241.35},0).wait(1).to({scaleX:0.1058,scaleY:0.1058,x:248.9,y:242},0).wait(1).to({scaleX:0.1223,scaleY:0.1223,x:248.65,y:242.75},0).wait(1).to({scaleX:0.1392,scaleY:0.1392,x:248.4,y:243.5},0).wait(1).to({scaleX:0.1565,scaleY:0.1565,x:248.15,y:244.3},0).wait(1).to({scaleX:0.1742,scaleY:0.1742,x:247.9,y:245.05},0).wait(1).to({scaleX:0.1924,scaleY:0.1924,x:247.6,y:245.85},0).wait(1).to({scaleX:0.211,scaleY:0.211,x:247.35,y:246.7},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:247.05,y:247.5},0).wait(1).to({scaleX:0.2495,scaleY:0.2495,x:246.75,y:248.35},0).wait(1).to({scaleX:0.2693,scaleY:0.2693,x:246.5,y:249.25},0).wait(1).to({scaleX:0.2897,scaleY:0.2897,x:246.15,y:250.15},0).wait(1).to({scaleX:0.3104,scaleY:0.3104,x:245.9,y:251.1},0).wait(1).to({scaleX:0.3316,scaleY:0.3316,x:245.55,y:252},0).wait(1).to({scaleX:0.3532,scaleY:0.3532,x:245.25,y:252.95},0).wait(1).to({scaleX:0.3752,scaleY:0.3752,x:244.9,y:253.9},0).wait(1).to({scaleX:0.3976,scaleY:0.3976,x:244.55,y:254.9},0).wait(1).to({scaleX:0.4205,scaleY:0.4205,x:244.25,y:255.9},0).wait(1).to({scaleX:0.4438,scaleY:0.4438,x:243.85,y:256.95},0).wait(1).to({scaleX:0.4675,scaleY:0.4675,x:243.5,y:257.95},0).wait(1).to({scaleX:0.4917,scaleY:0.4917,x:243.15,y:259.05},0).wait(1).to({scaleX:0.5163,scaleY:0.5163,x:242.8,y:260.15},0).wait(1).to({scaleX:0.5413,scaleY:0.5413,x:242.45,y:261.25},0).wait(1).to({scaleX:0.5667,scaleY:0.5667,x:242.05,y:262.4},0).wait(1).to({scaleX:0.5926,scaleY:0.5926,x:241.7,y:263.55},0).wait(1).to({scaleX:0.5966,scaleY:0.5966,x:241.35,y:263.3},0).wait(1).to({x:241,y:262.9},0).wait(1).to({x:240.7,y:262.45},0).wait(1).to({x:240.35,y:262},0).wait(1).to({x:240,y:261.55},0).wait(1).to({x:239.7,y:261.1},0).wait(1).to({x:239.35,y:260.65},0).wait(1).to({x:239,y:260.15},0).wait(1).to({x:238.65,y:259.7},0).wait(1).to({scaleX:0.601,scaleY:0.601,x:238.3,y:259.2},0).wait(1).to({scaleX:0.609,scaleY:0.609,x:238,y:258.75},0).wait(1).to({scaleX:0.6171,scaleY:0.6171,x:237.6,y:258.3},0).wait(1).to({scaleX:0.6254,scaleY:0.6254,x:237.3,y:257.8},0).wait(1).to({scaleX:0.6338,scaleY:0.6338,x:236.9,y:257.3},0).wait(1).to({scaleX:0.6423,scaleY:0.6423,x:236.55,y:256.8},0).wait(1).to({scaleX:0.6509,scaleY:0.6509,x:236.2,y:256.35},0).wait(1).to({scaleX:0.6596,scaleY:0.6596,x:235.85,y:255.8},0).wait(1).to({scaleX:0.6684,scaleY:0.6684,x:235.45,y:255.3},0).wait(1).to({scaleX:0.6773,scaleY:0.6773,x:235.05,y:254.75},0).wait(1).to({scaleX:0.6864,scaleY:0.6864,x:234.7,y:254.25},0).wait(1).to({scaleX:0.6833,scaleY:0.6833,x:234.6,y:254.1},0).wait(1).to({scaleX:0.6767,scaleY:0.6767,x:234.55},0).wait(1).to({scaleX:0.6701,scaleY:0.6701,y:254.05},0).wait(1).to({scaleX:0.6634,scaleY:0.6634,x:234.5},0).wait(1).to({scaleX:0.6566,scaleY:0.6566},0).wait(1).to({scaleX:0.6498,scaleY:0.6498,y:254},0).wait(1).to({scaleX:0.6428,scaleY:0.6428,x:234.45,y:253.95},0).wait(1).to({scaleX:0.6358,scaleY:0.6358,y:254},0).wait(1).to({scaleX:0.6287,scaleY:0.6287,x:234.4,y:253.95},0).wait(1).to({scaleX:0.6215,scaleY:0.6215,y:253.9},0).wait(1).to({scaleX:0.6143,scaleY:0.6143,x:234.35},0).wait(1).to({scaleX:0.6069,scaleY:0.6069,y:253.85},0).wait(1).to({scaleX:0.5995,scaleY:0.5995,x:234.3},0).wait(1).to({scaleX:0.5486,scaleY:0.5486,x:234.15,y:253.7},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:233.9,y:253.45},0).wait(1).to({scaleX:0.3907,scaleY:0.3907,x:233.65,y:253.15},0).wait(1).to({scaleX:0.3105,scaleY:0.3105,x:233.4,y:252.9},0).wait(1).to({scaleX:0.2295,scaleY:0.2295,x:233.1,y:252.6},0).wait(1).to({scaleX:0.1477,scaleY:0.1477,x:232.8,y:252.35},0).wait(1).to({scaleX:0.065,scaleY:0.065,x:232.55,y:252.1},0).wait(1).to({scaleX:0.0375,scaleY:0.0375,x:232.5,y:252},0).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_7 = new lib.kisi3();
	this.instance_7.setTransform(246.2,238.75,0.0339,0.0339,0,0,0,60.6,62);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).wait(1).to({regX:62.9,regY:62.9,scaleX:0.0507,scaleY:0.0507,x:243.9,y:240.65},0).wait(1).to({scaleX:0.0679,scaleY:0.0679,x:241.45,y:242.6},0).wait(1).to({scaleX:0.0856,scaleY:0.0856,x:239,y:244.6},0).wait(1).to({scaleX:0.1038,scaleY:0.1038,x:236.45,y:246.65},0).wait(1).to({scaleX:0.1223,scaleY:0.1223,x:233.8,y:248.75},0).wait(1).to({scaleX:0.1413,scaleY:0.1413,x:231.15,y:250.9},0).wait(1).to({scaleX:0.1608,scaleY:0.1608,x:228.4,y:253.05},0).wait(1).to({scaleX:0.1807,scaleY:0.1807,x:225.6,y:255.3},0).wait(1).to({scaleX:0.2009,scaleY:0.2009,x:222.75,y:257.6},0).wait(1).to({scaleX:0.2217,scaleY:0.2217,x:219.85,y:259.95},0).wait(1).to({scaleX:0.2429,scaleY:0.2429,x:216.85,y:262.35},0).wait(1).to({scaleX:0.2645,scaleY:0.2645,x:213.8,y:264.8},0).wait(1).to({scaleX:0.2866,scaleY:0.2866,x:210.7,y:267.3},0).wait(1).to({scaleX:0.3091,scaleY:0.3091,x:207.55,y:269.85},0).wait(1).to({scaleX:0.332,scaleY:0.332,x:204.3,y:272.45},0).wait(1).to({scaleX:0.3554,scaleY:0.3554,x:201,y:275.05},0).wait(1).to({scaleX:0.3792,scaleY:0.3792,x:197.65,y:277.75},0).wait(1).to({scaleX:0.4035,scaleY:0.4035,x:194.3,y:280.5},0).wait(1).to({scaleX:0.4282,scaleY:0.4282,x:190.8,y:283.3},0).wait(1).to({scaleX:0.4533,scaleY:0.4533,x:187.25,y:286.1},0).wait(1).to({scaleX:0.4788,scaleY:0.4788,x:183.65,y:288.95},0).wait(1).to({scaleX:0.5048,scaleY:0.5048,x:180,y:291.9},0).wait(1).to({scaleX:0.5313,scaleY:0.5313,x:176.25,y:294.9},0).wait(1).to({scaleX:0.5581,scaleY:0.5581,x:172.5,y:297.9},0).wait(1).to({scaleX:0.5854,scaleY:0.5854,x:168.65,y:301},0).wait(1).to({scaleX:0.6132,scaleY:0.6132,x:164.75,y:304.15},0).wait(1).to({scaleX:0.6414,scaleY:0.6414,x:160.8,y:307.35},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:156.75,y:310.55},0).wait(1).to({scaleX:0.699,scaleY:0.699,x:152.65,y:313.8},0).wait(1).to({scaleX:0.7285,scaleY:0.7285,x:148.5,y:317.15},0).wait(1).to({scaleX:0.7584,scaleY:0.7584,x:144.3,y:320.55},0).wait(1).to({scaleX:0.7644,scaleY:0.7644,x:142.7,y:321.2},0).wait(1).to({x:141.75,y:321.15},0).wait(1).to({x:140.75,y:321.1},0).wait(1).to({x:139.75,y:321.05},0).wait(1).to({x:138.7,y:321},0).wait(1).to({x:137.65},0).wait(1).to({x:136.6,y:320.95},0).wait(1).to({x:135.55,y:320.9},0).wait(1).to({x:134.45,y:320.85},0).wait(1).to({x:133.35,y:320.8},0).wait(1).to({scaleX:0.7712,scaleY:0.7712,x:132.25,y:320.7},0).wait(1).to({scaleX:0.783,scaleY:0.783,x:131.15},0).wait(1).to({scaleX:0.7951,scaleY:0.7951,x:130.05,y:320.65},0).wait(1).to({scaleX:0.8073,scaleY:0.8073,x:128.95},0).wait(1).to({scaleX:0.8196,scaleY:0.8196,x:127.8,y:320.55},0).wait(1).to({scaleX:0.8321,scaleY:0.8321,x:126.65},0).wait(1).to({scaleX:0.8447,scaleY:0.8447,x:125.5,y:320.5},0).wait(1).to({scaleX:0.8575,scaleY:0.8575,x:124.3,y:320.45},0).wait(1).to({scaleX:0.8704,scaleY:0.8704,x:123.1,y:320.4},0).wait(1).to({scaleX:0.8835,scaleY:0.8835,x:121.9,y:320.35},0).wait(1).to({scaleX:0.8967,scaleY:0.8967,x:120.7,y:320.3},0).wait(1).to({scaleX:0.8917,scaleY:0.8917,x:123.9,y:317.9},0).wait(1).to({scaleX:0.8827,scaleY:0.8827,x:128.1,y:314.85},0).wait(1).to({scaleX:0.8736,scaleY:0.8736,x:132.35,y:311.85},0).wait(1).to({scaleX:0.8644,scaleY:0.8644,x:136.6,y:308.8},0).wait(1).to({scaleX:0.8551,scaleY:0.8551,x:141,y:305.75},0).wait(1).to({scaleX:0.8457,scaleY:0.8457,x:145.35,y:302.6},0).wait(1).to({scaleX:0.8362,scaleY:0.8362,x:149.8,y:299.45},0).wait(1).to({scaleX:0.8266,scaleY:0.8266,x:154.3,y:296.25},0).wait(1).to({scaleX:0.8169,scaleY:0.8169,x:158.8,y:293.05},0).wait(1).to({scaleX:0.8071,scaleY:0.8071,x:163.35,y:289.75},0).wait(1).to({scaleX:0.7972,scaleY:0.7972,x:168,y:286.5},0).wait(1).to({scaleX:0.7872,scaleY:0.7872,x:172.6,y:283.15},0).wait(1).to({scaleX:0.7771,scaleY:0.7771,x:177.35,y:279.8},0).wait(1).to({scaleX:0.7669,scaleY:0.7669,x:182.1,y:276.45},0).wait(1).to({scaleX:0.7067,scaleY:0.7067,x:186.75,y:272.95},0).wait(1).to({scaleX:0.6292,scaleY:0.6292,x:191.45,y:269.4},0).wait(1).to({scaleX:0.5509,scaleY:0.5509,x:196.2,y:265.9},0).wait(1).to({scaleX:0.472,scaleY:0.472,x:200.95,y:262.35},0).wait(1).to({scaleX:0.3922,scaleY:0.3922,x:205.75,y:258.7},0).wait(1).to({scaleX:0.3118,scaleY:0.3118,x:210.65,y:255.05},0).wait(1).to({scaleX:0.2306,scaleY:0.2306,x:215.55,y:251.4},0).wait(1).to({scaleX:0.1487,scaleY:0.1487,x:220.5,y:247.65},0).wait(1).to({scaleX:0.066,scaleY:0.066,x:225.5,y:243.95},0).wait(1).to({scaleX:0.0384,scaleY:0.0384,x:227.15,y:242.65},0).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_8 = new lib.kisi5();
	this.instance_8.setTransform(247.15,234.55,0.041,0.041,0,0,0,99.9,97.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).wait(1).to({regX:93.6,regY:93.6,scaleX:0.0539,scaleY:0.0539,x:246.15,y:231.6},0).wait(1).to({scaleX:0.0672,scaleY:0.0672,x:245.45,y:228.8},0).wait(1).to({scaleX:0.0808,scaleY:0.0808,x:244.7,y:225.9},0).wait(1).to({scaleX:0.0948,scaleY:0.0948,x:243.95,y:222.9},0).wait(1).to({scaleX:0.1092,scaleY:0.1092,x:243.2,y:219.85},0).wait(1).to({scaleX:0.1239,scaleY:0.1239,x:242.4,y:216.75},0).wait(1).to({scaleX:0.139,scaleY:0.139,x:241.6,y:213.5},0).wait(1).to({scaleX:0.1544,scaleY:0.1544,x:240.75,y:210.25},0).wait(1).to({scaleX:0.1702,scaleY:0.1702,x:239.95,y:206.9},0).wait(1).to({scaleX:0.1864,scaleY:0.1864,x:239.05,y:203.45},0).wait(1).to({scaleX:0.203,scaleY:0.203,x:238.15,y:199.9},0).wait(1).to({scaleX:0.2198,scaleY:0.2198,x:237.25,y:196.35},0).wait(1).to({scaleX:0.2371,scaleY:0.2371,x:236.3,y:192.65},0).wait(1).to({scaleX:0.2548,scaleY:0.2548,x:235.35,y:188.9},0).wait(1).to({scaleX:0.2727,scaleY:0.2727,x:234.4,y:185.1},0).wait(1).to({scaleX:0.2911,scaleY:0.2911,x:233.4,y:181.15},0).wait(1).to({scaleX:0.3098,scaleY:0.3098,x:232.4,y:177.2},0).wait(1).to({scaleX:0.3289,scaleY:0.3289,x:231.4,y:173.15},0).wait(1).to({scaleX:0.3483,scaleY:0.3483,x:230.3,y:169},0).wait(1).to({scaleX:0.3682,scaleY:0.3682,x:229.25,y:164.75},0).wait(1).to({scaleX:0.3883,scaleY:0.3883,x:228.15,y:160.5},0).wait(1).to({scaleX:0.4089,scaleY:0.4089,x:227.05,y:156.1},0).wait(1).to({scaleX:0.4298,scaleY:0.4298,x:225.9,y:151.65},0).wait(1).to({scaleX:0.451,scaleY:0.451,x:224.8,y:147.1},0).wait(1).to({scaleX:0.4727,scaleY:0.4727,x:223.65,y:142.55},0).wait(1).to({scaleX:0.4736,scaleY:0.4736,x:223.25,y:141.4},0).wait(1).to({x:222.9,y:140.35},0).wait(1).to({x:222.5,y:139.3},0).wait(1).to({x:222.1,y:138.25},0).wait(1).to({x:221.7,y:137.15},0).wait(1).to({x:221.3,y:136.05},0).wait(1).to({x:220.9,y:134.9},0).wait(1).to({x:220.5,y:133.8},0).wait(1).to({x:220.1,y:132.6},0).wait(1).to({x:219.65,y:131.45},0).wait(1).to({x:219.25,y:130.25},0).wait(1).to({scaleX:0.4753,scaleY:0.4753,x:218.8,y:129.05},0).wait(1).to({scaleX:0.4816,scaleY:0.4816,x:218.25,y:127.75},0).wait(1).to({scaleX:0.488,scaleY:0.488,x:217.8,y:126.5},0).wait(1).to({scaleX:0.4945,scaleY:0.4945,x:217.35,y:125.25},0).wait(1).to({scaleX:0.501,scaleY:0.501,x:216.8,y:123.95},0).wait(1).to({scaleX:0.5077,scaleY:0.5077,x:216.3,y:122.6},0).wait(1).to({scaleX:0.5144,scaleY:0.5144,x:215.8,y:121.3},0).wait(1).to({scaleX:0.5213,scaleY:0.5213,x:215.3,y:119.95},0).wait(1).to({scaleX:0.5282,scaleY:0.5282,x:214.75,y:118.6},0).wait(1).to({scaleX:0.5352,scaleY:0.5352,x:214.2,y:117.2},0).wait(1).to({scaleX:0.5423,scaleY:0.5423,x:213.65,y:115.75},0).wait(1).to({scaleX:0.5495,scaleY:0.5495,x:213.15,y:114.4},0).wait(1).to({scaleX:0.5499,scaleY:0.5499,y:116.75},0).wait(1).to({scaleX:0.5446,scaleY:0.5446,x:213.7,y:122.4},0).wait(1).to({scaleX:0.5392,scaleY:0.5392,x:214.25,y:128.15},0).wait(1).to({scaleX:0.5338,scaleY:0.5338,x:214.8,y:133.95},0).wait(1).to({scaleX:0.5283,scaleY:0.5283,x:215.4,y:139.85},0).wait(1).to({scaleX:0.5227,scaleY:0.5227,x:215.95,y:145.8},0).wait(1).to({scaleX:0.5171,scaleY:0.5171,x:216.5,y:151.8},0).wait(1).to({scaleX:0.5114,scaleY:0.5114,x:217.1,y:157.85},0).wait(1).to({scaleX:0.5057,scaleY:0.5057,x:217.7,y:164.05},0).wait(1).to({scaleX:0.4998,scaleY:0.4998,x:218.3,y:170.25},0).wait(1).to({scaleX:0.494,scaleY:0.494,x:218.9,y:176.5},0).wait(1).to({scaleX:0.488,scaleY:0.488,x:219.5,y:182.85},0).wait(1).to({scaleX:0.482,scaleY:0.482,x:220.1,y:189.25},0).wait(1).to({scaleX:0.476,scaleY:0.476,x:220.7,y:195.75},0).wait(1).to({scaleX:0.4349,scaleY:0.4349,x:221.55,y:202.4},0).wait(1).to({scaleX:0.371,scaleY:0.371,x:222.55,y:209.25},0).wait(1).to({scaleX:0.3064,scaleY:0.3064,x:223.55,y:216.15},0).wait(1).to({scaleX:0.2411,scaleY:0.2411,x:224.55,y:223.15},0).wait(1).to({scaleX:0.1751,scaleY:0.1751,x:225.6,y:230.2},0).wait(1).to({scaleX:0.1086,scaleY:0.1086,x:226.65,y:237.3},0).wait(1).to({scaleX:0.0413,scaleY:0.0413,x:227.65,y:244.45},0).wait(1).to({scaleX:0.0189,scaleY:0.0189,x:228,y:246.85},0).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_9 = new lib.kisi10();
	this.instance_9.setTransform(249.2,240.3,0.041,0.041,0,0,0,78,87.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(1).to({regX:90.8,regY:90.8,scaleX:0.0558,scaleY:0.0558,x:253.55,y:240.85},0).wait(1).to({scaleX:0.071,scaleY:0.071,x:257.55,y:241.35},0).wait(1).to({scaleX:0.0865,scaleY:0.0865,x:261.6,y:241.8},0).wait(1).to({scaleX:0.1024,scaleY:0.1024,x:265.8,y:242.35},0).wait(1).to({scaleX:0.1186,scaleY:0.1186,x:270.05,y:242.8},0).wait(1).to({scaleX:0.1352,scaleY:0.1352,x:274.4,y:243.4},0).wait(1).to({scaleX:0.1522,scaleY:0.1522,x:278.85,y:243.85},0).wait(1).to({scaleX:0.1696,scaleY:0.1696,x:283.4,y:244.45},0).wait(1).to({scaleX:0.1873,scaleY:0.1873,x:288.05,y:245},0).wait(1).to({scaleX:0.2054,scaleY:0.2054,x:292.8,y:245.55},0).wait(1).to({scaleX:0.2238,scaleY:0.2238,x:297.6,y:246.1},0).wait(1).to({scaleX:0.2426,scaleY:0.2426,x:302.55,y:246.75},0).wait(1).to({scaleX:0.2618,scaleY:0.2618,x:307.55,y:247.3},0).wait(1).to({scaleX:0.2813,scaleY:0.2813,x:312.7,y:247.95},0).wait(1).to({scaleX:0.3012,scaleY:0.3012,x:317.9,y:248.55},0).wait(1).to({scaleX:0.3215,scaleY:0.3215,x:323.25,y:249.2},0).wait(1).to({scaleX:0.3421,scaleY:0.3421,x:328.65,y:249.85},0).wait(1).to({scaleX:0.3631,scaleY:0.3631,x:334.15,y:250.5},0).wait(1).to({scaleX:0.3845,scaleY:0.3845,x:339.75,y:251.15},0).wait(1).to({scaleX:0.4062,scaleY:0.4062,x:345.45,y:251.9},0).wait(1).to({scaleX:0.4283,scaleY:0.4283,x:351.25,y:252.55},0).wait(1).to({scaleX:0.4507,scaleY:0.4507,x:357.15,y:253.3},0).wait(1).to({scaleX:0.4736,scaleY:0.4736,x:363.1,y:254},0).wait(1).to({scaleX:0.4968,scaleY:0.4968,x:369.2,y:254.7},0).wait(1).to({scaleX:0.5203,scaleY:0.5203,x:375.4,y:255.45},0).wait(1).to({scaleX:0.5442,scaleY:0.5442,x:381.65,y:256.2},0).wait(1).to({scaleX:0.5685,scaleY:0.5685,x:388,y:256.95},0).wait(1).to({scaleX:0.5932,scaleY:0.5932,x:394.45,y:257.7},0).wait(1).to({scaleX:0.6182,scaleY:0.6182,x:401.05,y:258.55},0).wait(1).to({scaleX:0.6253,scaleY:0.6253,x:403.3,y:258.5},0).wait(1).to({x:403.9,y:258.1},0).wait(1).to({x:404.45,y:257.75},0).wait(1).to({x:405,y:257.35},0).wait(1).to({x:405.6,y:256.95},0).wait(1).to({x:406.2,y:256.55},0).wait(1).to({x:406.8,y:256.15},0).wait(1).to({x:407.4,y:255.75},0).wait(1).to({x:408,y:255.35},0).wait(1).to({x:408.6,y:254.95},0).wait(1).to({x:409.25,y:254.5},0).wait(1).to({x:409.85,y:254.1},0).wait(1).to({x:410.5,y:253.65},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:411.15,y:253.2},0).wait(1).to({scaleX:0.634,scaleY:0.634,x:411.9,y:252.75},0).wait(1).to({scaleX:0.6424,scaleY:0.6424,x:412.7,y:252.4},0).wait(1).to({scaleX:0.6508,scaleY:0.6508,x:413.45,y:251.95},0).wait(1).to({scaleX:0.6594,scaleY:0.6594,x:414.25,y:251.5},0).wait(1).to({scaleX:0.6681,scaleY:0.6681,x:415.05,y:251.05},0).wait(1).to({scaleX:0.6768,scaleY:0.6768,x:415.85,y:250.6},0).wait(1).to({scaleX:0.6857,scaleY:0.6857,x:416.7,y:250.15},0).wait(1).to({scaleX:0.6946,scaleY:0.6946,x:417.5,y:249.7},0).wait(1).to({scaleX:0.7037,scaleY:0.7037,x:418.35,y:249.25},0).wait(1).to({scaleX:0.7129,scaleY:0.7129,x:419.2,y:248.85},0).wait(1).to({scaleX:0.7221,scaleY:0.7221,x:420.05,y:248.3},0).wait(1).to({scaleX:0.7315,scaleY:0.7315,x:420.9,y:247.85},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:421.8,y:247.4},0).wait(1).to({scaleX:0.7391,scaleY:0.7391,x:417.15,y:247.3},0).wait(1).to({scaleX:0.7314,scaleY:0.7314,x:409.65,y:247.35},0).wait(1).to({scaleX:0.7237,scaleY:0.7237,x:402.1,y:247.45},0).wait(1).to({scaleX:0.716,scaleY:0.716,x:394.5,y:247.55},0).wait(1).to({scaleX:0.7081,scaleY:0.7081,x:386.85,y:247.7},0).wait(1).to({scaleX:0.7002,scaleY:0.7002,x:379,y:247.75},0).wait(1).to({scaleX:0.6922,scaleY:0.6922,x:371.2,y:247.85},0).wait(1).to({scaleX:0.6841,scaleY:0.6841,x:363.25,y:247.95},0).wait(1).to({scaleX:0.6759,scaleY:0.6759,x:355.25,y:248.05},0).wait(1).to({scaleX:0.6677,scaleY:0.6677,x:347.15,y:248.15},0).wait(1).to({scaleX:0.6593,scaleY:0.6593,x:339,y:248.25},0).wait(1).to({scaleX:0.6509,scaleY:0.6509,x:330.8,y:248.4},0).wait(1).to({scaleX:0.6424,scaleY:0.6424,x:322.5,y:248.5},0).wait(1).to({scaleX:0.6339,scaleY:0.6339,x:314.1,y:248.6},0).wait(1).to({scaleX:0.625,scaleY:0.625,x:305.65,y:248.7},0).wait(1).to({scaleX:0.5515,scaleY:0.5532,x:296.3,y:248.65},0).wait(1).to({scaleX:0.4774,scaleY:0.4808,x:286.8,y:248.55},0).wait(1).to({scaleX:0.4026,scaleY:0.4077,x:277.3,y:248.45},0).wait(1).to({scaleX:0.3272,scaleY:0.334,x:267.65,y:248.35},0).wait(1).to({scaleX:0.251,scaleY:0.2596,x:257.95,y:248.25},0).wait(1).to({scaleX:0.1743,scaleY:0.1846,x:248.2,y:248.15},0).wait(1).to({scaleX:0.0969,scaleY:0.109,x:238.3,y:248.1},0).wait(1).to({scaleX:0.0188,scaleY:0.0327,x:228.35,y:248},0).wait(1).to({scaleX:0.0072,scaleY:0.0072,skewY:180,x:225.05,y:247.95},0).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_10 = new lib.kisi8();
	this.instance_10.setTransform(251.75,236.85,0.0326,0.0326,0,0,0,53.7,53.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).wait(1).to({regX:55.6,regY:55.5,scaleX:0.0454,scaleY:0.0454,x:252.7,y:238.45},0).wait(1).to({scaleX:0.0585,scaleY:0.0585,x:253.7,y:240.1},0).wait(1).to({scaleX:0.0718,scaleY:0.0718,x:254.7,y:241.75},0).wait(1).to({scaleX:0.0854,scaleY:0.0854,x:255.7,y:243.45},0).wait(1).to({scaleX:0.0993,scaleY:0.0993,x:256.7,y:245.15},0).wait(1).to({scaleX:0.1135,scaleY:0.1135,x:257.75,y:246.95},0).wait(1).to({scaleX:0.128,scaleY:0.128,x:258.85,y:248.75},0).wait(1).to({scaleX:0.1427,scaleY:0.1427,x:259.95,y:250.55},0).wait(1).to({scaleX:0.1577,scaleY:0.1577,x:261.05,y:252.45},0).wait(1).to({scaleX:0.173,scaleY:0.173,x:262.15,y:254.35},0).wait(1).to({scaleX:0.1885,scaleY:0.1885,x:263.35,y:256.25},0).wait(1).to({scaleX:0.2044,scaleY:0.2044,x:264.5,y:258.25},0).wait(1).to({scaleX:0.2205,scaleY:0.2205,x:265.7,y:260.25},0).wait(1).to({scaleX:0.2369,scaleY:0.2369,x:266.9,y:262.3},0).wait(1).to({scaleX:0.2535,scaleY:0.2535,x:268.15,y:264.3},0).wait(1).to({scaleX:0.2704,scaleY:0.2704,x:269.4,y:266.45},0).wait(1).to({scaleX:0.2876,scaleY:0.2876,x:270.7,y:268.55},0).wait(1).to({scaleX:0.3051,scaleY:0.3051,x:271.95,y:270.75},0).wait(1).to({scaleX:0.3229,scaleY:0.3229,x:273.3,y:272.95},0).wait(1).to({scaleX:0.3409,scaleY:0.3409,x:274.65,y:275.2},0).wait(1).to({scaleX:0.3592,scaleY:0.3592,x:275.95,y:277.5},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:277.35,y:279.75},0).wait(1).to({scaleX:0.3967,scaleY:0.3967,x:278.75,y:282.1},0).wait(1).to({scaleX:0.4158,scaleY:0.4158,x:280.15,y:284.55},0).wait(1).to({scaleX:0.4352,scaleY:0.4352,x:281.6,y:286.9},0).wait(1).to({scaleX:0.4549,scaleY:0.4549,x:283.1,y:289.35},0).wait(1).to({scaleX:0.4748,scaleY:0.4748,x:284.55,y:291.85},0).wait(1).to({scaleX:0.4951,scaleY:0.4951,x:286.1,y:294.4},0).wait(1).to({scaleX:0.5156,scaleY:0.5156,x:287.55,y:296.9},0).wait(1).to({scaleX:0.5364,scaleY:0.5364,x:289.1,y:299.5},0).wait(1).to({scaleX:0.5574,scaleY:0.5574,x:290.7,y:302.15},0).wait(1).to({scaleX:0.5788,scaleY:0.5788,x:292.3,y:304.75},0).wait(1).to({scaleX:0.6004,scaleY:0.6004,x:293.9,y:307.45},0).wait(1).to({scaleX:0.6223,scaleY:0.6223,x:295.5,y:310.2},0).wait(1).to({scaleX:0.6444,scaleY:0.6444,x:297.15,y:312.9},0).wait(1).to({scaleX:0.6669,scaleY:0.6669,x:298.8,y:315.7},0).wait(1).to({scaleX:0.6896,scaleY:0.6896,x:300.5,y:318.5},0).wait(1).to({scaleX:0.7125,scaleY:0.7125,x:302.15,y:321.4},0).wait(1).to({scaleX:0.7358,scaleY:0.7358,x:303.9,y:324.3},0).wait(1).to({scaleX:0.7593,scaleY:0.7593,x:305.6,y:327.2},0).wait(1).to({scaleX:0.7832,scaleY:0.7832,x:307.4,y:330.15},0).wait(1).to({scaleX:0.8072,scaleY:0.8072,x:309.2,y:333.15},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,x:311,y:336.2},0).wait(1).to({scaleX:0.8562,scaleY:0.8562,x:312.8,y:339.25},0).wait(1).to({scaleX:0.8684,scaleY:0.8684,x:313.8,y:340.8},0).wait(1).to({x:313.9,y:340.9},0).wait(1).to({x:314.05,y:341},0).wait(1).to({x:314.2,y:341.1},0).wait(1).to({x:314.3,y:341.2},0).wait(1).to({x:314.45,y:341.3},0).wait(1).to({x:314.55,y:341.4},0).wait(1).to({x:314.7,y:341.5},0).wait(1).to({x:314.85,y:341.6},0).wait(1).to({x:315,y:341.7},0).wait(1).to({x:315.1,y:341.8},0).wait(1).to({x:315.25,y:341.9},0).wait(1).to({x:315.4,y:342},0).wait(1).to({scaleX:0.8723,scaleY:0.8723,x:315.55,y:342.1},0).wait(1).to({scaleX:0.888,scaleY:0.888,x:315.7,y:342.25},0).wait(1).to({scaleX:0.9038,scaleY:0.9038,x:315.85,y:342.35},0).wait(1).to({scaleX:0.9198,scaleY:0.9198,x:316.05,y:342.5},0).wait(1).to({scaleX:0.9359,scaleY:0.9359,x:316.25,y:342.65},0).wait(1).to({scaleX:0.9522,scaleY:0.9522,x:316.4,y:342.75},0).wait(1).to({scaleX:0.9686,scaleY:0.9686,x:316.6,y:342.9},0).wait(1).to({scaleX:0.9852,scaleY:0.9852,x:316.8,y:343.05},0).wait(1).to({scaleX:1.002,scaleY:1.002,x:316.95,y:343.2},0).wait(1).to({scaleX:1.0188,scaleY:1.0188,x:317.15,y:343.35},0).wait(1).to({scaleX:1.0117,scaleY:1.0117,x:314.2,y:340.15},0).wait(1).to({scaleX:1.0022,scaleY:1.0022,x:310.9,y:336.65},0).wait(1).to({scaleX:0.9927,scaleY:0.9927,x:307.65,y:333.15},0).wait(1).to({scaleX:0.9831,scaleY:0.9831,x:304.3,y:329.55},0).wait(1).to({scaleX:0.9734,scaleY:0.9734,x:300.95,y:325.95},0).wait(1).to({scaleX:0.9636,scaleY:0.9636,x:297.6,y:322.4},0).wait(1).to({scaleX:0.9537,scaleY:0.9537,x:294.2,y:318.75},0).wait(1).to({scaleX:0.9438,scaleY:0.9438,x:290.7,y:315.05},0).wait(1).to({scaleX:0.9338,scaleY:0.9338,x:287.25,y:311.3},0).wait(1).to({scaleX:0.9237,scaleY:0.9237,x:283.8,y:307.55},0).wait(1).to({scaleX:0.9135,scaleY:0.9135,x:280.25,y:303.8},0).wait(1).to({scaleX:0.9032,scaleY:0.9032,x:276.7,y:300},0).wait(1).to({scaleX:0.8928,scaleY:0.8928,x:273.15,y:296.15},0).wait(1).to({scaleX:0.8824,scaleY:0.8824,x:269.5,y:292.25},0).wait(1).to({scaleX:0.8718,scaleY:0.8718,x:265.85,y:288.4},0).wait(1).to({scaleX:0.8084,scaleY:0.8084,x:262.15,y:284.35},0).wait(1).to({scaleX:0.7186,scaleY:0.7186,x:258.3,y:280.3},0).wait(1).to({scaleX:0.628,scaleY:0.628,x:254.4,y:276.15},0).wait(1).to({scaleX:0.5368,scaleY:0.5368,x:250.5,y:272},0).wait(1).to({scaleX:0.4449,scaleY:0.4449,x:246.6,y:267.8},0).wait(1).to({scaleX:0.3522,scaleY:0.3522,x:242.65,y:263.55},0).wait(1).to({scaleX:0.2589,scaleY:0.2589,x:238.6,y:259.25},0).wait(1).to({scaleX:0.1649,scaleY:0.1649,x:234.6,y:255},0).wait(1).to({scaleX:0.0702,scaleY:0.0702,x:230.55,y:250.7},0).wait(1).to({scaleX:0.0386,scaleY:0.0386,x:229.2,y:249.25},0).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_11 = new lib.kisi2();
	this.instance_11.setTransform(244.8,234.75,0.0404,0.0404,0,0,0,70.5,70.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).wait(1).to({regX:69.7,regY:69.6,scaleX:0.0508,scaleY:0.0508,x:244.4,y:237.8},0).wait(1).to({scaleX:0.0613,scaleY:0.0613,x:243.95,y:240.9},0).wait(1).to({scaleX:0.0721,scaleY:0.0721,x:243.65,y:244.15},0).wait(1).to({scaleX:0.0832,scaleY:0.0832,x:243.2,y:247.5},0).wait(1).to({scaleX:0.0944,scaleY:0.0944,x:242.85,y:250.85},0).wait(1).to({scaleX:0.1059,scaleY:0.1059,x:242.4,y:254.25},0).wait(1).to({scaleX:0.1176,scaleY:0.1176,x:242,y:257.8},0).wait(1).to({scaleX:0.1296,scaleY:0.1296,x:241.55,y:261.35},0).wait(1).to({scaleX:0.1418,scaleY:0.1418,x:241.15,y:265},0).wait(1).to({scaleX:0.1542,scaleY:0.1542,x:240.7,y:268.75},0).wait(1).to({scaleX:0.1669,scaleY:0.1669,x:240.25,y:272.5},0).wait(1).to({scaleX:0.1797,scaleY:0.1797,x:239.8,y:276.4},0).wait(1).to({scaleX:0.1929,scaleY:0.1929,x:239.3,y:280.3},0).wait(1).to({scaleX:0.2062,scaleY:0.2062,x:238.8,y:284.3},0).wait(1).to({scaleX:0.2198,scaleY:0.2198,x:238.3,y:288.4},0).wait(1).to({scaleX:0.2336,scaleY:0.2336,x:237.85,y:292.5},0).wait(1).to({scaleX:0.2477,scaleY:0.2477,x:237.3,y:296.75},0).wait(1).to({scaleX:0.2619,scaleY:0.2619,x:236.8,y:301},0).wait(1).to({scaleX:0.2764,scaleY:0.2764,x:236.3,y:305.35},0).wait(1).to({scaleX:0.2912,scaleY:0.2912,x:235.8,y:309.75},0).wait(1).to({scaleX:0.3062,scaleY:0.3062,x:235.25,y:314.2},0).wait(1).to({scaleX:0.3214,scaleY:0.3214,x:234.7,y:318.75},0).wait(1).to({scaleX:0.3368,scaleY:0.3368,x:234.1,y:323.4},0).wait(1).to({scaleX:0.3525,scaleY:0.3525,x:233.55,y:328.1},0).wait(1).to({scaleX:0.3684,scaleY:0.3684,x:233.05,y:332.85},0).wait(1).to({scaleX:0.3845,scaleY:0.3845,x:232.45,y:337.65},0).wait(1).to({scaleX:0.4009,scaleY:0.4009,x:231.85,y:342.6},0).wait(1).to({scaleX:0.4175,scaleY:0.4175,x:231.25,y:347.55},0).wait(1).to({scaleX:0.4343,scaleY:0.4343,x:230.65,y:352.6},0).wait(1).to({scaleX:0.4514,scaleY:0.4514,x:230.05,y:357.7},0).wait(1).to({scaleX:0.4687,scaleY:0.4687,x:229.4,y:362.85},0).wait(1).to({scaleX:0.4862,scaleY:0.4862,x:228.8,y:368.15},0).wait(1).to({scaleX:0.504,scaleY:0.504,x:228.2,y:373.45},0).wait(1).to({scaleX:0.5104,scaleY:0.5104,x:227.65,y:375.55},0).wait(1).to({x:227.3,y:375.85},0).wait(1).to({x:226.9,y:376.2},0).wait(1).to({x:226.5,y:376.55},0).wait(1).to({x:226.1,y:376.9},0).wait(1).to({x:225.7,y:377.25},0).wait(1).to({x:225.3,y:377.55},0).wait(1).to({x:224.9,y:377.95},0).wait(1).to({x:224.45,y:378.3},0).wait(1).to({x:224.05,y:378.65},0).wait(1).to({x:223.6,y:379},0).wait(1).to({x:223.2,y:379.4},0).wait(1).to({x:222.75,y:379.75},0).wait(1).to({x:222.3,y:380.15},0).wait(1).to({x:221.85,y:380.5},0).wait(1).to({scaleX:0.5116,scaleY:0.5116,x:221.4,y:380.9},0).wait(1).to({scaleX:0.5206,scaleY:0.5206,x:220.95,y:381.35},0).wait(1).to({scaleX:0.5297,scaleY:0.5297,x:220.45,y:381.7},0).wait(1).to({scaleX:0.5389,scaleY:0.5389,x:220,y:382.1},0).wait(1).to({scaleX:0.5482,scaleY:0.5482,x:219.55,y:382.5},0).wait(1).to({scaleX:0.5576,scaleY:0.5576,x:219.05,y:382.85},0).wait(1).to({scaleX:0.5671,scaleY:0.5671,x:218.6,y:383.25},0).wait(1).to({scaleX:0.5767,scaleY:0.5767,x:218.05,y:383.7},0).wait(1).to({scaleX:0.5864,scaleY:0.5864,x:217.55,y:384.1},0).wait(1).to({scaleX:0.5962,scaleY:0.5962,x:217.05,y:384.5},0).wait(1).to({scaleX:0.6061,scaleY:0.6061,x:216.55,y:384.95},0).wait(1).to({scaleX:0.6099,scaleY:0.6099,x:216.4,y:383.6},0).wait(1).to({scaleX:0.6039,scaleY:0.6039,x:216.95,y:379.45},0).wait(1).to({scaleX:0.5978,scaleY:0.5978,x:217.4,y:375.2},0).wait(1).to({scaleX:0.5916,scaleY:0.5916,x:217.9,y:370.9},0).wait(1).to({scaleX:0.5854,scaleY:0.5854,x:218.4,y:366.6},0).wait(1).to({scaleX:0.5791,scaleY:0.5791,x:218.9,y:362.25},0).wait(1).to({scaleX:0.5727,scaleY:0.5727,x:219.4,y:357.85},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:219.9,y:353.4},0).wait(1).to({scaleX:0.5599,scaleY:0.5599,x:220.4,y:348.95},0).wait(1).to({scaleX:0.5534,scaleY:0.5534,x:220.95,y:344.45},0).wait(1).to({scaleX:0.5468,scaleY:0.5468,x:221.5,y:339.9},0).wait(1).to({scaleX:0.5402,scaleY:0.5402,x:222.05,y:335.35},0).wait(1).to({scaleX:0.5335,scaleY:0.5335,x:222.6,y:330.7},0).wait(1).to({scaleX:0.5268,scaleY:0.5268,x:223.1,y:326},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:223.65,y:321.35},0).wait(1).to({scaleX:0.5131,scaleY:0.5131,x:224.2,y:316.55},0).wait(1).to({scaleX:0.4868,scaleY:0.4868,x:224.8,y:311.8},0).wait(1).to({scaleX:0.4474,scaleY:0.4474,x:225.4,y:307},0).wait(1).to({scaleX:0.4077,scaleY:0.4077,x:225.95,y:302.15},0).wait(1).to({scaleX:0.3676,scaleY:0.3676,x:226.55,y:297.3},0).wait(1).to({scaleX:0.3273,scaleY:0.3273,x:227.15,y:292.4},0).wait(1).to({scaleX:0.2865,scaleY:0.2865,x:227.75,y:287.4},0).wait(1).to({scaleX:0.2455,scaleY:0.2455,x:228.35,y:282.4},0).wait(1).to({scaleX:0.2041,scaleY:0.2041,x:229,y:277.35},0).wait(1).to({scaleX:0.1625,scaleY:0.1625,x:229.6,y:272.3},0).wait(1).to({scaleX:0.1204,scaleY:0.1204,x:230.25,y:267.2},0).wait(1).to({scaleX:0.0781,scaleY:0.0781,x:230.9,y:262.05},0).wait(1).to({scaleX:0.0354,scaleY:0.0354,x:231.5,y:256.8},0).wait(1).to({scaleX:0.0212,scaleY:0.0212,x:231.7,y:255.05},0).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_12 = new lib.kisi1();
	this.instance_12.setTransform(250.15,239.15,0.0254,0.0254,0,0,0,74.9,74.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({_off:false},0).wait(1).to({regX:77.5,regY:77.5,scaleX:0.0414,scaleY:0.0414,x:252.1,y:237.15},0).wait(1).to({scaleX:0.0577,scaleY:0.0577,x:254,y:235.05},0).wait(1).to({scaleX:0.0745,scaleY:0.0745,x:256,y:232.9},0).wait(1).to({scaleX:0.0916,scaleY:0.0916,x:258.05,y:230.75},0).wait(1).to({scaleX:0.1091,scaleY:0.1091,x:260.1,y:228.5},0).wait(1).to({scaleX:0.127,scaleY:0.127,x:262.2,y:226.25},0).wait(1).to({scaleX:0.1452,scaleY:0.1452,x:264.35,y:223.9},0).wait(1).to({scaleX:0.1638,scaleY:0.1638,x:266.55,y:221.55},0).wait(1).to({scaleX:0.1828,scaleY:0.1828,x:268.8,y:219.1},0).wait(1).to({scaleX:0.2021,scaleY:0.2021,x:271.1,y:216.65},0).wait(1).to({scaleX:0.2218,scaleY:0.2218,x:273.45,y:214.15},0).wait(1).to({scaleX:0.242,scaleY:0.242,x:275.8,y:211.6},0).wait(1).to({scaleX:0.2624,scaleY:0.2624,x:278.25,y:209},0).wait(1).to({scaleX:0.2832,scaleY:0.2832,x:280.7,y:206.35},0).wait(1).to({scaleX:0.3045,scaleY:0.3045,x:283.2,y:203.65},0).wait(1).to({scaleX:0.326,scaleY:0.326,x:285.75,y:200.85},0).wait(1).to({scaleX:0.348,scaleY:0.348,x:288.35,y:198.05},0).wait(1).to({scaleX:0.3703,scaleY:0.3703,x:291,y:195.25},0).wait(1).to({scaleX:0.393,scaleY:0.393,x:293.7,y:192.35},0).wait(1).to({scaleX:0.4161,scaleY:0.4161,x:296.4,y:189.4},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,x:299.2,y:186.4},0).wait(1).to({scaleX:0.4634,scaleY:0.4634,x:302,y:183.4},0).wait(1).to({scaleX:0.4875,scaleY:0.4875,x:304.9,y:180.35},0).wait(1).to({scaleX:0.5121,scaleY:0.5121,x:307.8,y:177.2},0).wait(1).to({scaleX:0.5371,scaleY:0.5371,x:310.7,y:174},0).wait(1).to({scaleX:0.5624,scaleY:0.5624,x:313.75,y:170.8},0).wait(1).to({scaleX:0.588,scaleY:0.588,x:316.75,y:167.5},0).wait(1).to({scaleX:0.6141,scaleY:0.6141,x:319.85,y:164.2},0).wait(1).to({scaleX:0.6405,scaleY:0.6405,x:323,y:160.85},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,x:326.15,y:157.4},0).wait(1).to({scaleX:0.6944,scaleY:0.6944,x:329.35,y:153.95},0).wait(1).to({scaleX:0.7213,scaleY:0.7213,x:332.55,y:150.5},0).wait(1).to({x:332.75,y:149.55},0).wait(1).to({x:332.95,y:148.55},0).wait(1).to({x:333.15,y:147.55},0).wait(1).to({x:333.4,y:146.55},0).wait(1).to({x:333.6,y:145.5},0).wait(1).to({x:333.85,y:144.45},0).wait(1).to({x:334.05,y:143.4},0).wait(1).to({x:334.3,y:142.35},0).wait(1).to({x:334.55,y:141.3},0).wait(1).to({x:334.75,y:140.2},0).wait(1).to({x:335,y:139.1},0).wait(1).to({x:335.25,y:137.95},0).wait(1).to({x:335.5,y:136.85},0).wait(1).to({x:335.75,y:135.7},0).wait(1).to({x:336,y:134.55},0).wait(1).to({x:336.25,y:133.35},0).wait(1).to({scaleX:0.7283,scaleY:0.7283,x:336.5,y:132.2},0).wait(1).to({scaleX:0.7405,scaleY:0.7405,x:336.8,y:131.05},0).wait(1).to({scaleX:0.7529,scaleY:0.7529,x:337.1,y:129.85},0).wait(1).to({scaleX:0.7654,scaleY:0.7654,x:337.35,y:128.65},0).wait(1).to({scaleX:0.778,scaleY:0.778,x:337.7,y:127.45},0).wait(1).to({scaleX:0.7907,scaleY:0.7907,x:338,y:126.25},0).wait(1).to({scaleX:0.8036,scaleY:0.8036,x:338.3,y:125.05},0).wait(1).to({scaleX:0.8166,scaleY:0.8166,x:338.6,y:123.8},0).wait(1).to({scaleX:0.8298,scaleY:0.8298,x:338.9,y:122.5},0).wait(1).to({scaleX:0.8431,scaleY:0.8431,x:339.25,y:121.25},0).wait(1).to({scaleX:0.8565,scaleY:0.8565,x:339.55,y:120},0).wait(1).to({scaleX:0.8488,scaleY:0.8488,x:335.8,y:124.55},0).wait(1).to({scaleX:0.8406,scaleY:0.8406,x:331.9,y:129.25},0).wait(1).to({scaleX:0.8323,scaleY:0.8323,x:328,y:134},0).wait(1).to({scaleX:0.8239,scaleY:0.8239,x:324,y:138.8},0).wait(1).to({scaleX:0.8155,scaleY:0.8155,x:320.05,y:143.65},0).wait(1).to({scaleX:0.8069,scaleY:0.8069,x:316,y:148.55},0).wait(1).to({scaleX:0.7983,scaleY:0.7983,x:311.9,y:153.5},0).wait(1).to({scaleX:0.7897,scaleY:0.7897,x:307.85,y:158.5},0).wait(1).to({scaleX:0.7809,scaleY:0.7809,x:303.65,y:163.5},0).wait(1).to({scaleX:0.772,scaleY:0.772,x:299.5,y:168.6},0).wait(1).to({scaleX:0.7631,scaleY:0.7631,x:295.3,y:173.75},0).wait(1).to({scaleX:0.7541,scaleY:0.7541,x:291.05,y:178.9},0).wait(1).to({scaleX:0.745,scaleY:0.745,x:286.75,y:184.15},0).wait(1).to({scaleX:0.7359,scaleY:0.7359,x:282.4,y:189.4},0).wait(1).to({scaleX:0.7266,scaleY:0.7266,x:278,y:194.65},0).wait(1).to({scaleX:0.6917,scaleY:0.6917,x:273.55,y:199.95},0).wait(1).to({scaleX:0.6218,scaleY:0.6218,x:268.95,y:205.25},0).wait(1).to({scaleX:0.5513,scaleY:0.5513,x:264.3,y:210.5},0).wait(1).to({scaleX:0.4801,scaleY:0.4801,x:259.6,y:215.8},0).wait(1).to({scaleX:0.4085,scaleY:0.4085,x:254.9,y:221.2},0).wait(1).to({scaleX:0.3362,scaleY:0.3362,x:250.15,y:226.65},0).wait(1).to({scaleX:0.2633,scaleY:0.2633,x:245.35,y:232.1},0).wait(1).to({scaleX:0.1899,scaleY:0.1899,x:240.5,y:237.6},0).wait(1).to({scaleX:0.1158,scaleY:0.1158,x:235.6,y:243.15},0).wait(1).to({scaleX:0.0411,scaleY:0.0411,x:230.7,y:248.75},0).wait(1).to({scaleX:0.0162,scaleY:0.0162,x:229.05,y:250.6},0).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_13 = new lib.kisi4();
	this.instance_13.setTransform(247.95,238.2,0.041,0.041,0,0,0,61,58.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).wait(1).to({regX:59.7,regY:59.6,scaleX:0.0646,scaleY:0.0646,x:244.85,y:237.6},0).wait(1).to({scaleX:0.0886,scaleY:0.0886,x:241.8,y:236.95},0).wait(1).to({scaleX:0.1132,scaleY:0.1132,x:238.65,y:236.3},0).wait(1).to({scaleX:0.1382,scaleY:0.1382,x:235.5,y:235.65},0).wait(1).to({scaleX:0.1637,scaleY:0.1637,x:232.2,y:234.9},0).wait(1).to({scaleX:0.1897,scaleY:0.1897,x:228.95,y:234.2},0).wait(1).to({scaleX:0.2162,scaleY:0.2162,x:225.55,y:233.55},0).wait(1).to({scaleX:0.2432,scaleY:0.2432,x:222.1,y:232.8},0).wait(1).to({scaleX:0.2707,scaleY:0.2707,x:218.6,y:232.05},0).wait(1).to({scaleX:0.2987,scaleY:0.2987,x:215.05,y:231.3},0).wait(1).to({scaleX:0.3272,scaleY:0.3272,x:211.4,y:230.55},0).wait(1).to({scaleX:0.3561,scaleY:0.3561,x:207.7,y:229.8},0).wait(1).to({scaleX:0.3856,scaleY:0.3856,x:203.95,y:229},0).wait(1).to({scaleX:0.4155,scaleY:0.4155,x:200.15,y:228.15},0).wait(1).to({scaleX:0.446,scaleY:0.446,x:196.3,y:227.4},0).wait(1).to({scaleX:0.4769,scaleY:0.4769,x:192.3,y:226.5},0).wait(1).to({scaleX:0.5083,scaleY:0.5083,x:188.3,y:225.7},0).wait(1).to({scaleX:0.5402,scaleY:0.5402,x:184.25,y:224.85},0).wait(1).to({scaleX:0.5727,scaleY:0.5727,x:180.15,y:224},0).wait(1).to({scaleX:0.6055,scaleY:0.6055,x:175.95,y:223.1},0).wait(1).to({scaleX:0.6389,scaleY:0.6389,x:171.7,y:222.2},0).wait(1).to({scaleX:0.6728,scaleY:0.6728,x:167.35,y:221.3},0).wait(1).to({scaleX:0.7071,scaleY:0.7071,x:162.95,y:220.35},0).wait(1).to({scaleX:0.742,scaleY:0.742,x:158.55,y:219.4},0).wait(1).to({scaleX:0.7773,scaleY:0.7773,x:154,y:218.5},0).wait(1).to({scaleX:0.8131,scaleY:0.8131,x:149.45,y:217.5},0).wait(1).to({scaleX:0.8495,scaleY:0.8495,x:144.8,y:216.55},0).wait(1).to({scaleX:0.8863,scaleY:0.8863,x:140.15,y:215.5},0).wait(1).to({scaleX:0.9236,scaleY:0.9236,x:135.4,y:214.55},0).wait(1).to({scaleX:0.9614,scaleY:0.9614,x:130.55,y:213.55},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:125.7,y:212.55},0).wait(1).to({scaleX:1.0203,scaleY:1.0203,x:122.65,y:211.7},0).wait(1).to({x:121.85,y:211.2},0).wait(1).to({x:121.05,y:210.7},0).wait(1).to({x:120.25,y:210.15},0).wait(1).to({x:119.4,y:209.65},0).wait(1).to({x:118.55,y:209.1},0).wait(1).to({x:117.7,y:208.55},0).wait(1).to({x:116.85,y:208},0).wait(1).to({x:116,y:207.45},0).wait(1).to({x:115.1,y:206.9},0).wait(1).to({x:114.2,y:206.35},0).wait(1).to({x:113.3,y:205.75},0).wait(1).to({x:112.4,y:205.2},0).wait(1).to({x:111.5,y:204.6},0).wait(1).to({x:110.55,y:204},0).wait(1).to({x:109.6,y:203.4},0).wait(1).to({x:108.65,y:202.8},0).wait(1).to({x:107.7,y:202.2},0).wait(1).to({x:106.75,y:201.6},0).wait(1).to({x:105.75,y:200.95},0).wait(1).to({x:104.75,y:200.35},0).wait(1).to({scaleX:1.0244,scaleY:1.0244,x:103.75,y:199.7},0).wait(1).to({scaleX:1.0397,scaleY:1.0397,x:102.7,y:199.1},0).wait(1).to({scaleX:1.0551,scaleY:1.0551,x:101.7,y:198.5},0).wait(1).to({scaleX:1.0707,scaleY:1.0707,x:100.65,y:197.8},0).wait(1).to({scaleX:1.0864,scaleY:1.0864,x:99.6,y:197.2},0).wait(1).to({scaleX:1.1023,scaleY:1.1023,x:98.5,y:196.55},0).wait(1).to({scaleX:1.1183,scaleY:1.1183,x:97.4,y:195.85},0).wait(1).to({scaleX:1.1345,scaleY:1.1345,x:96.35,y:195.2},0).wait(1).to({scaleX:1.1509,scaleY:1.1509,x:95.25,y:194.55},0).wait(1).to({scaleX:1.1673,scaleY:1.1673,x:94.15,y:193.85},0).wait(1).to({scaleX:1.184,scaleY:1.184,x:93.05,y:193.2},0).wait(1).to({scaleX:1.2008,scaleY:1.2008,x:91.9,y:192.5},0).wait(1).to({scaleX:1.2177,scaleY:1.2177,x:90.75,y:191.8},0).wait(1).to({scaleX:1.2348,scaleY:1.2348,x:89.55,y:191.1},0).wait(1).to({scaleX:1.2237,scaleY:1.2237,x:93.7,y:192.65},0).wait(1).to({scaleX:1.2107,scaleY:1.2107,x:98.25,y:194.3},0).wait(1).to({scaleX:1.1975,scaleY:1.1975,x:102.8,y:195.95},0).wait(1).to({scaleX:1.1843,scaleY:1.1843,x:107.35,y:197.7},0).wait(1).to({scaleX:1.1709,scaleY:1.1709,x:112,y:199.4},0).wait(1).to({scaleX:1.1574,scaleY:1.1574,x:116.65,y:201.15},0).wait(1).to({scaleX:1.1438,scaleY:1.1438,x:121.4,y:202.85},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:126.1,y:204.65},0).wait(1).to({scaleX:1.1162,scaleY:1.1162,x:130.9,y:206.45},0).wait(1).to({scaleX:1.1022,scaleY:1.1022,x:135.75,y:208.2},0).wait(1).to({scaleX:1.0882,scaleY:1.0882,x:140.6,y:210},0).wait(1).to({scaleX:1.074,scaleY:1.074,x:145.5,y:211.85},0).wait(1).to({scaleX:1.0597,scaleY:1.0597,x:150.45,y:213.65},0).wait(1).to({scaleX:1.0453,scaleY:1.0453,x:155.45,y:215.5},0).wait(1).to({scaleX:1.0308,scaleY:1.0308,x:160.45,y:217.4},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,x:165.55,y:219.25},0).wait(1).to({scaleX:0.9253,scaleY:0.9253,x:170.7,y:221.05},0).wait(1).to({scaleX:0.8508,scaleY:0.8508,x:175.95,y:222.9},0).wait(1).to({scaleX:0.7756,scaleY:0.7756,x:181.2,y:224.8},0).wait(1).to({scaleX:0.6999,scaleY:0.6999,x:186.5,y:226.6},0).wait(1).to({scaleX:0.6237,scaleY:0.6237,x:191.85,y:228.5},0).wait(1).to({scaleX:0.5468,scaleY:0.5468,x:197.2,y:230.45},0).wait(1).to({scaleX:0.4694,scaleY:0.4694,x:202.6,y:232.35},0).wait(1).to({scaleX:0.3914,scaleY:0.3914,x:208.05,y:234.3},0).wait(1).to({scaleX:0.3129,scaleY:0.3129,x:213.6,y:236.2},0).wait(1).to({scaleX:0.2338,scaleY:0.2338,x:219.1,y:238.15},0).wait(1).to({scaleX:0.1541,scaleY:0.1541,x:224.65,y:240.15},0).wait(1).to({scaleX:0.0738,scaleY:0.0738,x:230.25,y:242.1},0).wait(1).to({scaleX:0.047,scaleY:0.047,x:232.15,y:242.75},0).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489,450.6);
// library properties:
lib.properties = {
	id: '9C8C372532E14B36A74561EA2785E00C',
	width: 500,
	height: 500,
	fps: 24,
	color: "#666666",
	opacity: 0.00,
	manifest: [
		{src:"images/anime9_atlas_1.png", id:"anime9_atlas_1"},
		{src:"images/anime9_atlas_2.png", id:"anime9_atlas_2"},
		{src:"images/anime9_atlas_3.png", id:"anime9_atlas_3"},
		{src:"images/anime9_atlas_4.png", id:"anime9_atlas_4"},
		{src:"images/anime9_atlas_5.png", id:"anime9_atlas_5"},
		{src:"images/anime9_atlas_6.png", id:"anime9_atlas_6"},
		{src:"images/anime9_atlas_7.png", id:"anime9_atlas_7"},
		{src:"images/anime9_atlas_8.png", id:"anime9_atlas_8"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9C8C372532E14B36A74561EA2785E00C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;