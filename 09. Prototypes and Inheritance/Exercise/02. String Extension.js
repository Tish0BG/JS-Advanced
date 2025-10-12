(function solve() {

    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        return this.length === 0;
    };

    String.prototype.truncate = function(n) {
        const originalString = this.toString();

        if (n <= 3) {
            return ".".repeat(n);
        }

        if (originalString.length <= n) {
            return originalString;
        }

        const ellipsis = '...';
        const maxLength = n - 3;

        let lastSpaceIndex = originalString.slice(0, maxLength + 1).lastIndexOf(' ');

        if (lastSpaceIndex !== -1) {
            return originalString.slice(0, lastSpaceIndex) + ellipsis;
        } else {
            return originalString.slice(0, maxLength) + ellipsis;
        }
    };

    String.format = function(string, ...params) {
        let result = string;

        for (let i = 0; i < params.length; i++) {
            const placeholder = new RegExp(`\\{${i}\\}`, 'g');
            const replacement = params[i];
            
            if (replacement !== undefined) {
                result = result.replace(placeholder, replacement);
            }
        }

        return result;
    };

})();