describe('PaymentPackage', () => {
    describe('Instantiation and Properties', () => {
        it('should instantiate correctly with valid parameters', () => {
            const pp = new PaymentPackage('Service', 100);
            expect(pp.name).to.equal('Service');
            expect(pp.value).to.equal(100);
            expect(pp.VAT).to.equal(20);
            expect(pp.active).to.be.true;
        });

        it('should have correct initial properties', () => {
            const pp = new PaymentPackage('Consultation', 800);
            expect(pp._name).to.equal('Consultation');
            expect(pp._value).to.equal(800);
            expect(pp._VAT).to.equal(20);
            expect(pp._active).to.be.true;
        });

        it('should work correctly with value of 0', () => {
             const pp = new PaymentPackage('Free Service', 0);
             expect(pp.value).to.equal(0);
        });
    });

    describe('Name Accessor', () => {
        it('should throw an error for non-string name', () => {
            expect(() => new PaymentPackage(123, 100)).to.throw('Name must be a non-empty string');
        });

        it('should throw an error for an empty string name', () => {
            expect(() => new PaymentPackage('', 100)).to.throw('Name must be a non-empty string');
        });

        it('should set the name correctly when valid', () => {
            const pp = new PaymentPackage('Service', 100);
            pp.name = 'New Service';
            expect(pp.name).to.equal('New Service');
        });
    });

    describe('Value Accessor', () => {
        it('should throw an error for non-number value', () => {
            expect(() => new PaymentPackage('Service', '100')).to.throw('Value must be a non-negative number');
        });

        it('should throw an error for a negative value', () => {
            expect(() => new PaymentPackage('Service', -50)).to.throw('Value must be a non-negative number');
        });

        it('should set the value correctly when valid', () => {
            const pp = new PaymentPackage('Service', 100);
            pp.value = 150;
            expect(pp.value).to.equal(150);
        });
    });

    describe('VAT Accessor', () => {
        let pp;
        beforeEach(() => {
            pp = new PaymentPackage('Service', 100);
        });

        it('should have a default value of 20', () => {
            expect(pp.VAT).to.equal(20);
        });

        it('should throw an error for non-number VAT', () => {
            expect(() => pp.VAT = 'abc').to.throw('VAT must be a non-negative number');
        });

        it('should throw an error for negative VAT', () => {
            expect(() => pp.VAT = -10).to.throw('VAT must be a non-negative number');
        });

        it('should set VAT correctly when valid (including 0)', () => {
            pp.VAT = 10;
            expect(pp.VAT).to.equal(10);
            pp.VAT = 0;
            expect(pp.VAT).to.equal(0);
        });
    });

    describe('Active Accessor', () => {
        let pp;
        beforeEach(() => {
            pp = new PaymentPackage('Service', 100);
        });

        it('should have a default value of true', () => {
            expect(pp.active).to.be.true;
        });

        it('should throw an error for non-boolean active status', () => {
            expect(() => pp.active = null).to.throw('Active status must be a boolean');
            expect(() => pp.active = 'true').to.throw('Active status must be a boolean');
        });

        it('should set active status correctly', () => {
            pp.active = false;
            expect(pp.active).to.be.false;
            pp.active = true;
            expect(pp.active).to.be.true;
        });
    });

    describe('toString Method', () => {
        let pp;
        beforeEach(() => {
            pp = new PaymentPackage('Service', 100);
        });

        it('should return correct string for an active package', () => {
            const expectedOutput = [
                'Package: Service',
                '- Value (excl. VAT): 100',
                '- Value (VAT 20%): 120'
            ].join('\n');
            expect(pp.toString()).to.equal(expectedOutput);
        });

        it('should return correct string for an inactive package', () => {
            pp.active = false;
            const expectedOutput = [
                'Package: Service (inactive)',
                '- Value (excl. VAT): 100',
                '- Value (VAT 20%): 120'
            ].join('\n');
            expect(pp.toString()).to.equal(expectedOutput);
        });

        it('should return correct string with custom VAT', () => {
            pp.VAT = 10;
            const expectedOutput = [
                'Package: Service',
                '- Value (excl. VAT): 100',
                '- Value (VAT 10%): 110'
            ].join('\n');
            expect(pp.toString()).to.equal(expectedOutput);
        });

        it('should return correct string for package with 0 value', () => {
            pp.value = 0;
            const expectedOutput = [
                'Package: Service',
                '- Value (excl. VAT): 0',
                '- Value (VAT 20%): 0'
            ].join('\n');
            expect(pp.toString()).to.equal(expectedOutput);
        });
    });
});