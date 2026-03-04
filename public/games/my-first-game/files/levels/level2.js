function level2() {
	if(start == true) {
		ball.x = 100;
		ball.y = canvas.height / 2 - ball.r;
		goal.x = canvas.width - 100;
		goal.y = canvas.height / 2 - goal.r3;
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
	
		//spikes
			//spike1
	var spike1 = {
			x: 200,
			x2: 200 + ball.r / 2,
			y: canvas.height / 2 - ball.r,
			w: ball.r * 3,
			w2: ball.r * 2,
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
			x: spike1.x + spike1.w + ball.r * 2,
			x2: 200 + ball.r / 2,
			y: canvas.height / 2 - ball.r,
			w: ball.r * 2,
			w2: ball.r,
			h: ball.r
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
		ctx.lineTo(spike2disp.spikeX + spike2Size, spike2disp.spikeY + spike2Size);
		ctx.moveTo(spike2disp.spikeX + spike2Size, spike2disp.spikeY + spike2Size);
		ctx.lineTo(spike2disp.spikeX, spike2disp.spikeY + spike2Size);
		ctx.moveTo(spike2disp.spikeX, spike2disp.spikeY + spike2Size);
		ctx.lineTo(spike2disp.spikeX + spike2Size / 2, spike2disp.spikeY);
		ctx.stroke();
	}
		var spike2Dis1 = spike2.x - ball.x - ball.r;
			spike2Dis2 = ball.x - ball.r - spike2.x - spike2.w;
			spike2Dis3 = spike2.y - ball.y - ball.r;
	
		if(ball.xs1 >= spike2Dis1 && ball.y + ball.r > spike2.y && ball.y - ball.r < spike2.y + spike2.h && ball.x < spike2.x2) {
			start = true;
		}
		if(ball.xs2 >= spike2Dis2 && ball.y + ball.r > spike2.y && ball.y - ball.r < spike2.y + spike2.h && ball.x > spike2.x2) {
			start = true;
		}
		if(ball.g >= spike2Dis3 && ball.x + ball.r > spike2.x2 && ball.x - ball.r < spike2.x2 + spike2.w2) {
			start = true;
		}
		
		//spike3
	var spike3 = {
			x: spike2.x + spike1.w + ball.r,
			x2: spike2.x + spike1.w + ball.r,
			y: canvas.height / 2 - ball.r * 7,
			w: ball.r * 2,
			w2: ball.r,
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
		var spike3Dis1 = spike3.x - ball.x - ball.r + 2;
			spike3Dis2 = ball.x - ball.r - spike3.x - spike3.w;
			spike3Dis3 = spike3.y - ball.y - ball.r;
	
		if(ball.xs1 >= spike3Dis1 && ball.y + ball.r > spike3.y && ball.y - ball.r < spike3.y + spike3.h && ball.x < spike3.x2) {
			start = true;
		}
		if(ball.xs2 >= spike3Dis2 && ball.y + ball.r > spike3.y && ball.y - ball.r < spike3.y + spike3.h && ball.x > spike3.x2) {
			start = true;
		}
		if(ball.g >= spike3Dis3 && ball.x + ball.r > spike3.x2 && ball.x - ball.r < spike3.x2 + spike3.w2) {
			start = true;
		}
		
		
			//boxes
				//box1
		var box1 = {
			x: spike1.x + spike1.w,
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
		
		if(ball.xs1 >= box1Dis1 && ball.y + ball.r > box1.y && ball.x < box1.x) {
			ball.xs1 = box1Dis1;
		}
		if(ball.xs2 >= box1Dis2 && ball.y + ball.r > box1.y && ball.x > box1.x) {
			ball.xs2 = box1Dis2;
		}
		if(ball.g >= box1Dis3 && ball.x + ball.r > box1.x && ball.x - ball.r < box1.x + box1.w) {
			ball.g = box1Dis3;
		}
			//box2
		var box2 = {
			x: box1.x + box1.w * 2,
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
		
		if(ball.xs1 >= box2Dis1 && ball.y + ball.r > box2.y && ball.x < box2.x) {
			ball.xs1 = box2Dis1;
		}
		if(ball.xs2 >= box2Dis2 && ball.y + ball.r > box2.y && ball.x > box2.x) {
			ball.xs2 = box2Dis2;
		}
		if(ball.g >= box2Dis3 && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w) {
			ball.g = box2Dis3;
		}
			//box3
		var box3 = {
			x: box1.x - ball.r * 3,
			y: box2.y - ball.r * 2,
			w: ball.r * 2,
			h: ball.r
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
			x: box1.x + box1.w * 3,
			y: canvas.height / 2 - ball.r * 6,
			w: ball.r * 2,
			h: ball.r * 6
		};
	ctx.beginPath();
	ctx.rect(box4.x, box4.y, box4.w, box4.h);
	ctx.stroke();
	
		var box4Dis1 = box4.x - ball.x - ball.r;
			box4Dis2 = ball.x - ball.r - box4.x - box4.w;
			box4Dis3 = box4.y - ball.y - ball.r;
		
		if(ball.xs1 >= box4Dis1 && ball.y + ball.r > box4.y && ball.x < box4.x) {
			ball.xs1 = box4Dis1;
		}
		if(ball.xs2 >= box4Dis2 && ball.y + ball.r > box4.y && ball.x > box4.x) {
			ball.xs2 = box4Dis2;
		}
		if(ball.g >= box4Dis3 && ball.x + ball.r > box4.x && ball.x - ball.r < box4.x + box4.w) {
			ball.g = box4Dis3;
		}
		
		//box5
		var box5 = {
			x: box3.x + ball.r * 3,
			y: box3.y - ball.r * 4,
			w: ball.r * 5,
			h: ball.r
		};
	ctx.beginPath();
	ctx.rect(box5.x, box5.y, box5.w, box5.h);
	ctx.stroke();
			
		var box5Dis1 = box5.x - ball.x - ball.r;
			box5Dis2 = ball.x - ball.r - box5.x - box5.w;
			box5Dis3 = box5.y - ball.y - ball.r;
			box5Dis4 = ball.y - ball.r - box5.y - box5.h;
		
		if(ball.xs1 >= box5Dis1 && ball.y + ball.r > box5.y && ball.y - ball.r < box5.y + box5.h - 2 && ball.x < box5.x) {
			ball.xs1 = box5Dis1;
		}
		if(ball.xs2 >= box5Dis2 && ball.y + ball.r > box5.y && ball.y - ball.r < box5.y + box5.h - 2 && ball.x > box5.x) {
			ball.xs2 = box5Dis2;
		}
		if(ball.g >= box5Dis3 && ball.y < box5.y && ball.x + ball.r > box5.x && ball.x - ball.r < box5.x + box5.w) {
			ball.g = box5Dis3;
		}
		if(box5Dis4 <= ball.g && ball.y > box5.y + box5.h && ball.g < 0 && ball.x + ball.r > box5.x && ball.x - ball.r < box5.x + box5.w) {
			ball.g = 0;
		}
		
		//box6
		var box6 = {
			x: box3.x - ball.r * 2,
			y: box3.y - ball.r,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box6.x, box6.y, box6.w, box6.h);
	ctx.stroke();
			
		var box6Dis1 = box6.x - ball.x - ball.r;
			box6Dis2 = ball.x - ball.r - box6.x - box6.w;
			box6Dis3 = box6.y - ball.y - ball.r;
			box6Dis4 = ball.y - ball.r - box6.y - box6.h;
		
		if(ball.xs1 >= box6Dis1 && ball.y + ball.r > box6.y && ball.y - ball.r < box6.y + box6.h  - 2 && ball.x < box6.x) {
			ball.xs1 = box6Dis1;
		}
		if(ball.xs2 >= box6Dis2 && ball.y + ball.r > box6.y && ball.y - ball.r < box6.y + box6.h  - 2 && ball.x > box6.x) {
			ball.xs2 = box6Dis2;
		}
		if(ball.g >= box6Dis3 && ball.y < box6.y && ball.x + ball.r > box6.x && ball.x - ball.r < box6.x + box6.w) {
			ball.g = box6Dis3;
		}
		if(box6Dis4 <= ball.g && ball.y > box6.y + box6.h && ball.g < 0 && ball.x + ball.r > box6.x && ball.x - ball.r < box6.x + box6.w) {
			ball.g = 0;
		}
		
}