function form(selector) {
    const formDOM = document.querySelector(selector);
    const allInputsDOM = formDOM.querySelectorAll('input');
    const allTextareaDOM = formDOM.querySelectorAll('textarea');
    const allTextsDOM = [...allInputsDOM, ...allTextareaDOM];
    const submitDOM = formDOM.querySelector('.btn[type="submit"]');

    submitDOM.addEventListener('click', event => {
        event.preventDefault();
        
        for (const input of allInputsDOM) {
            const text = input.value;
            const rule = input.dataset.validationRule;

            switch (rule) {
                case 'name':
                    console.log('validuoju pagal vardo taisykles', text);
                    break;
                case 'email':
                    console.log('validuoju pagal email taisykles', text);
                    break;
                case 'text':
                    console.log('validuoju pagal text taisykles', text);
                    break;
                default:
                    console.log('rasta neatpazinta validavimo taisykle:', text);
                    break;
            }
        }
        

    });

}

export {form}