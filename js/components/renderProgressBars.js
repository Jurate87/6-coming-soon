function renderProgressBars (selector, data) {
    
   // validation



   // logic
   const DOM = document.querySelector(selector);
   let HTML = '';

   for (let i = 0; i < data.length; i++ ) {
       const item = data[i];
       console.log(item)

       HTML += `<div class="progress-bar">
                   <div class="top">
                        <div class="label">${item.label}</div>
                        <div class="value">${item.value}%</div>
                    </div>
                   <div class="bottom">
                        <div class="progress" style="width:${item.value}%;"></div>
                   </div>
                </div>`;

   }



    DOM.insertAdjacentHTML('beforeend', HTML);

   // post logic validation



   // return result




}


export {renderProgressBars}