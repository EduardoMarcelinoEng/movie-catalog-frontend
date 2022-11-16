const utils = {
    formatDescription(text){
        return text.length > 45 ? `${text.substring(0,45)} ...` : text;
    }
}

export default utils;