document.addEventListener('DOMContentLoaded', function() {
    if(settings[0]['image_meta_data_function'] == '1'){
        const altTextInputs = document.querySelectorAll('input[name^="meta"][name$="[alt]"]');
        const altTextLabels = document.querySelectorAll('label[for^="ctrl_meta_alt"]');

        altTextInputs.forEach(input => {
            input.setAttribute('required', 'true');
        });

        altTextLabels.forEach(label => {
            label.classList.add('mandatory');
            label.innerHTML = label.textContent + '<span class="mandatory">*</span>';
        });
    }
});
