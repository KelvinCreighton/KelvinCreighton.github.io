function level3() {
	if(start == true) {
		ball.x = 100;
		ball.y = canvas.height / 2 - ball.r;
		goal.x = goal.r3;
		goal.y = goal.r3;
		start = false;
	}
		//half line
	var line1 = {
			x1: 0,
			x2: canvas.width,
			y: canvas.height / 2
		};
	ctx.beginPath();
	ctx.moveTo(line1.x1, line1.y);
	ctx.lineTo(line1.x2, line1.y);
	ctx.stroke();
	
	var line1Dis1 = line1.y - ball.y - ball.r;
		
		if(ball.g >= line1Dis1) {
			ball.g = line1Dis1;
		}
		
		//gravity blocks
			//halfBlock1
		var halfBlock1 = {
			x: canvas.width - ball.r * 2,
			y: canvas.height / 2 - ball.r * 2,
			w: ball.r * 2,
			h: ball.r * 2,
			};
	if(ball.gAcc == 0.04) {
		ctx.beginPath();
		ctx.rect(halfBlock1.x, halfBlock1.y, halfBlock1.w, halfBlock1.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(halfBlock1.x + halfBlock1.w / 4, halfBlock1.y + halfBlock1.h / 4, halfBlock1.w / 2, halfBlock1.h / 2);
		ctx.stroke();
			
		var halfBlock1Dis1 = halfBlock1.x - ball.x - ball.r;
			halfBlock1Dis2 = ball.x - ball.r - halfBlock1.x - halfBlock1.w;
			halfBlock1Dis3 = halfBlock1.y - ball.y - ball.r;
			halfBlock1Dis4 = ball.y - ball.r - halfBlock1.y - halfBlock1.h;
		
		if(ball.xs1 >= halfBlock1Dis1 && ball.y + ball.r > halfBlock1.y && ball.y - ball.r < halfBlock1.y + halfBlock1.h  - 2 && ball.x < halfBlock1.x) {
			ball.gAcc = 0.02;
		}
		if(ball.xs2 >= halfBlock1Dis2 && ball.y + ball.r > halfBlock1.y && ball.y - ball.r < halfBlock1.y + halfBlock1.h  - 2 && ball.x > halfBlock1.x) {
			ball.gAcc = 0.02;
		}
		if(ball.g >= halfBlock1Dis3 && ball.y < halfBlock1.y && ball.x + ball.r > halfBlock1.x && ball.x - ball.r < halfBlock1.x + halfBlock1.w) {
			ball.gAcc = 0.02;
		}
		if(halfBlock1Dis4 <= ball.g && ball.y > halfBlock1.y + halfBlock1.h && ball.g < 0 && ball.x + ball.r > halfBlock1.x && ball.x - ball.r < halfBlock1.x + halfBlock1.w) {
			ball.gAcc = 0.02;
		}
	}
		//boxes
			//box1
		var box1 = {
			x: 200,
			y: canvas.height / 2 - ball.r * 2,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box1.x, box1.y, box1.w, box1.h);
	ctx.stroke();
			
		var box1Dis1 = box1.x - ball.x - ball.r;
			box1Dis2 = ball.x - ball.r - box1.x - box1.w;
			box1Dis3 = box1.y - ball.y - ball.r;
			box1Dis4 = ball.y - ball.r - box1.y - box1.h;
		
		if(ball.xs1 >= box1Dis1 && ball.y + ball.r > box1.y && ball.y - ball.r < box1.y + box1.h  - 2 && ball.x < box1.x) {
			ball.xs1 = box1Dis1;
		}
		if(ball.xs2 >= box1Dis2 && ball.y + ball.r > box1.y && ball.y - ball.r < box1.y + box1.h  - 2 && ball.x > box1.x) {
			ball.xs2 = box1Dis2;
		}
		if(ball.g >= box1Dis3 && ball.y < box1.y && ball.x + ball.r > box1.x && ball.x - ball.r < box1.x + box1.w) {
			ball.g = box1Dis3;
		}
		if(box1Dis4 <= ball.g && ball.y > box1.y + box1.h && ball.g < 0 && ball.x + ball.r > box1.x && ball.x - ball.r < box1.x + box1.w) {
			ball.g = 0;
		}
		
		//box2
		var box2 = {
			x: box1.x + box1.w * 4,
			y: canvas.height / 2 - ball.r * 4,
			w: ball.r * 2,
			h: ball.r * 4
		};
	ctx.beginPath();
	ctx.rect(box2.x, box2.y, box2.w, box2.h);
	ctx.stroke();
			
		var box2Dis1 = box2.x - ball.x - ball.r;
			box2Dis2 = ball.x - ball.r - box2.x - box2.w;
			box2Dis3 = box2.y - ball.y - ball.r;
			box2Dis4 = ball.y - ball.r - box2.y - box2.h;
		
		if(ball.xs1 >= box2Dis1 && ball.y + ball.r > box2.y && ball.y - ball.r < box2.y + box2.h  - 2 && ball.x < box2.x) {
			ball.xs1 = box2Dis1;
		}
		if(ball.xs2 >= box2Dis2 && ball.y + ball.r > box2.y && ball.y - ball.r < box2.y + box2.h  - 2 && ball.x > box2.x) {
			ball.xs2 = box2Dis2;
		}
		if(ball.g >= box2Dis3 && ball.y < box2.y && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w) {
			ball.g = box2Dis3;
		}
		if(box2Dis4 <= ball.g && ball.y > box2.y + box2.h && ball.g < 0 && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w) {
			ball.g = 0;
		}
		
		//box3
		var box3 = {
			x: box2.x + box1.w,
			y: canvas.height / 2 - ball.r * 6,
			w: ball.r * 2,
			h: ball.r * 6
		};
	ctx.beginPath();
	ctx.rect(box3.x, box3.y, box3.w, box3.h);
	ctx.stroke();
			
		var box3Dis1 = box3.x - ball.x - ball.r;
			box3Dis2 = ball.x - ball.r - box3.x - box3.w;
			box3Dis3 = box3.y - ball.y - ball.r;
			box3Dis4 = ball.y - ball.r - box3.y - box3.h;
		
		if(ball.xs1 >= box3Dis1 && ball.y + ball.r > box3.y && ball.y - ball.r < box3.y + box3.h  - 2 && ball.x < box3.x) {
			ball.xs1 = box3Dis1;
		}
		if(ball.xs2 >= box3Dis2 && ball.y + ball.r > box3.y && ball.y - ball.r < box3.y + box3.h  - 2 && ball.x > box3.x) {
			ball.xs2 = box3Dis2;
		}
		if(ball.g >= box3Dis3 && ball.y < box3.y && ball.x + ball.r > box3.x && ball.x - ball.r < box3.x + box3.w) {
			ball.g = box3Dis3;
		}
		if(box3Dis4 <= ball.g && ball.y > box3.y + box3.h && ball.g < 0 && ball.x + ball.r > box3.x && ball.x - ball.r < box3.x + box3.w) {
			ball.g = 0;
		}
		
		//box4
		var box4 = {
			x: 100 - ball.r * 5,
			y: canvas.height / 2 - ball.r * 6,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box4.x, box4.y, box4.w, box4.h);
	ctx.stroke();
			
		var box4Dis1 = box4.x - ball.x - ball.r;
			box4Dis2 = ball.x - ball.r - box4.x - box4.w;
			box4Dis3 = box4.y - ball.y - ball.r;
			box4Dis4 = ball.y - ball.r - box4.y - box4.h;
		
		if(ball.xs1 >= box4Dis1 && ball.y + ball.r > box4.y && ball.y - ball.r < box4.y + box4.h  - 2 && ball.x < box4.x) {
			ball.xs1 = box4Dis1;
		}
		if(ball.xs2 >= box4Dis2 && ball.y + ball.r > box4.y && ball.y - ball.r < box4.y + box4.h  - 2 && ball.x > box4.x) {
			ball.xs2 = box4Dis2;
		}
		if(ball.g >= box4Dis3 && ball.y < box4.y && ball.x + ball.r > box4.x && ball.x - ball.r < box4.x + box4.w) {
			ball.g = box4Dis3;
		}
		if(box4Dis4 <= ball.g && ball.y > box4.y + box4.h && ball.g < 0 && ball.x + ball.r > box4.x && ball.x - ball.r < box4.x + box4.w) {
			ball.g = 0;
		}
		
		
		//spikes
			//spike1
	var spike1 = {
			x: box1.x + box1.w,
			x2: box1.x + box1.w + ball.r / 2,
			y: canvas.height / 2 - ball.r,
			w: ball.r * 6,
			w2: ball.r * 5,
			h: ball.r
		};
		
	var spikes1 = [];
	var spike1move;
	var spike1Size = ball.r;
	
	for(spike1move = 0; spike1move < spike1.w / ball.r; spike1move++) {
		spikes1.push({
			spikeY: spike1.y,
			spikeX: spike1.x + spike1move * spike1Size	
		});
	}
	var spike1i, spike1disp
	for(spike1i = 0; spike1i < spike1.w / ball.r; spike1i++) {
		spike1disp = spikes1[spike1i];
		
		ctx.beginPath();
		ctx.moveTo(spike1disp.spikeX + spike1Size / 2, spike1disp.spikeY);
		ctx.lineTo(spike1disp.spikeX + spike1Size, spike1disp.spikeY + spike1Size);
		ctx.moveTo(spike1disp.spikeX + spike1Size, spike1disp.spikeY + spike1Size);
		ctx.lineTo(spike1disp.spikeX, spike1disp.spikeY + spike1Size);
		ctx.moveTo(spike1disp.spikeX, spike1disp.spikeY + spike1Size);
		ctx.lineTo(spike1disp.spikeX + spike1Size / 2, spike1disp.spikeY);
		ctx.stroke();
	}
		var spike1Dis1 = spike1.x - ball.x - ball.r;
			spike1Dis2 = ball.x - ball.r - spike1.x - spike1.w;
			spike1Dis3 = spike1.y - ball.y - ball.r;
	
		if(ball.xs1 >= spike1Dis1 && ball.y + ball.r > spike1.y && ball.y - ball.r < spike1.y + spike1.h && ball.x < spike1.x2) {
			start = true;
		}
		if(ball.xs2 >= spike1Dis2 && ball.y + ball.r > spike1.y && ball.y - ball.r < spike1.y + spike1.h && ball.x > spike1.x2) {
			start = true;
		}
		if(ball.g >= spike1Dis3 && ball.x + ball.r > spike1.x2 && ball.x - ball.r < spike1.x2 + spike1.w2) {
			start = true;
		}
		
		//spike2
	var spike2 = {
			x: ball.r * 4,
			x2: ball.r * 4 + ball.r / 2,
			y: ball.r,
			w: canvas.width - ball.r * 5,
			w2: canvas.width - ball.r * 5,
			h: ball.r,
			h2: -ball.r
		};
	
	var spikes2 = [];
	var spike2move;
	var spike2Size = ball.r;
	
	for(spike2move = 0; spike2move < spike2.w / ball.r; spike2move++) {
		spikes2.push({
			spikeY: spike2.y,
			spikeX: spike2.x + spike2move * spike2Size	
		});
	}
	var spike2i, spike2disp
	for(spike2i = 0; spike2i < spike2.w / ball.r; spike2i++) {
		spike2disp = spikes2[spike2i];
		
		ctx.beginPath();
		ctx.moveTo(spike2disp.spikeX + spike2Size / 2, spike2disp.spikeY);
		ctx.lineTo(spike2disp.spikeX + spike2Size, spike2disp.spikeY - spike2Size);
		ctx.moveTo(spike2disp.spikeX + spike2Size, spike2disp.spikeY - spike2Size);
		ctx.lineTo(spike2disp.spikeX, spike2disp.spikeY - spike2Size);
		ctx.moveTo(spike2disp.spikeX, spike2disp.spikeY - spike2Size);
		ctx.lineTo(spike2disp.spikeX + spike2Size / 2, spike2disp.spikeY);
		ctx.stroke();
	}
		var spike2Dis1 = spike2.x - ball.x - ball.r;
			spike2Dis2 = ball.x - ball.r - spike2.x - spike2.w;
			spike2Dis3 = spike2.y - ball.y - ball.r;
			spike2Dis4 = ball.y - ball.r - spike2.y - spike2.h;
		
		if(ball.xs1 >= spike2Dis1 && ball.y + ball.r > spike2.y && ball.y - ball.r < spike2.y + spike2.h2  - 2 && ball.x < spike2.x) {
			start = true;
		}
		if(ball.xs2 >= spike2Dis2 && ball.y + ball.r > spike2.y && ball.y - ball.r < spike2.y + spike2.h2  - 2 && ball.x > spike2.x) {
			start = true;
		}
		if(ball.g >= spike2Dis3 && ball.y < spike2.y && ball.x + ball.r > spike2.x && ball.x - ball.r < spike2.x + spike2.w) {
			start = true;
		}
		if(spike2Dis4 <= ball.g && ball.y > spike2.y + spike2.h2 && ball.g < 0 && ball.x + ball.r > spike2.x && ball.x - ball.r < spike2.x + spike2.w) {
			start = true;
		}
		
		//spike3
	var spike3 = {
			x: spike1.x + spike1.w + ball.r * 4,
			x2: spike1.x + spike1.w + ball.r * 4 + ball.r / 2,
			y: canvas.height / 2 - ball.r,
			w: ball.r * 4,
			w2: ball.r * 3,
			h: ball.r
		};
	
	var spikes3 = [];
	var spike3move;
	var spike3Size = ball.r;
	
	for(spike3move = 0; spike3move < spike3.w / ball.r; spike3move++) {
		spikes3.push({
			spikeY: spike3.y,
			spikeX: spike3.x + spike3move * spike3Size	
		});
	}
	var spike3i, spike3disp
	for(spike3i = 0; spike3i < spike3.w / ball.r; spike3i++) {
		spike3disp = spikes3[spike3i];
		
		ctx.beginPath();
		ctx.moveTo(spike3disp.spikeX + spike3Size / 2, spike3disp.spikeY);
		ctx.lineTo(spike3disp.spikeX + spike3Size, spike3disp.spikeY + spike3Size);
		ctx.moveTo(spike3disp.spikeX + spike3Size, spike3disp.spikeY + spike3Size);
		ctx.lineTo(spike3disp.spikeX, spike3disp.spikeY + spike3Size);
		ctx.moveTo(spike3disp.spikeX, spike3disp.spikeY + spike3Size);
		ctx.lineTo(spike3disp.spikeX + spike3Size / 2, spike3disp.spikeY);
		ctx.stroke();
	}
		var spike3Dis1 = spike3.x - ball.x - ball.r;
			spike3Dis2 = ball.x - ball.r - spike3.x - spike3.w;
			spike3Dis3 = spike3.y - ball.y - ball.r;
			spike3Dis4 = ball.y - ball.r - spike3.y - spike3.h;
		
		if(ball.xs1 >= spike3Dis1 && ball.y + ball.r > spike3.y && ball.y - ball.r < spike3.y + spike3.h  - 2 && ball.x < spike3.x) {
			start = true;
		}
		if(ball.xs2 >= spike3Dis2 && ball.y + ball.r > spike3.y && ball.y - ball.r < spike3.y + spike3.h  - 2 && ball.x > spike3.x) {
			start = true;
		}
		if(ball.g >= spike3Dis3 && ball.y < spike3.y && ball.x + ball.r > spike3.x && ball.x - ball.r < spike3.x + spike3.w) {
			start = true;
		}
		if(spike3Dis4 <= ball.g && ball.y > spike3.y + spike3.h && ball.g < 0 && ball.x + ball.r > spike3.x && ball.x - ball.r < spike3.x + spike3.w) {
			start = true;
		}
}