describe('StringBuilder', () => {

  describe('Initialization', () => {
    it('should be a class', () => {
      expect(typeof StringBuilder).to.equal('function');
    });

    it('should initialize empty when no argument is given', () => {
      const sb = new StringBuilder();
      expect(sb.toString()).to.equal('');
    });

    it('should initialize correctly when string is passed', () => {
      const sb = new StringBuilder('test');
      expect(sb.toString()).to.equal('test');
    });

    it('should throw TypeError when initialized with non-string', () => {
      expect(() => new StringBuilder(123)).to.throw(TypeError, 'Argument must be a string');
      expect(() => new StringBuilder(['a', 'b'])).to.throw(TypeError);
      expect(() => new StringBuilder({})).to.throw(TypeError);
    });
  });

  describe('append()', () => {
    it('should append correctly to existing string', () => {
      const sb = new StringBuilder('Hello');
      sb.append(', world');
      expect(sb.toString()).to.equal('Hello, world');
    });

    it('should throw TypeError if argument is not a string', () => {
      const sb = new StringBuilder('Hello');
      expect(() => sb.append(123)).to.throw(TypeError, 'Argument must be a string');
    });
  });

  describe('prepend()', () => {
    it('should prepend correctly to existing string', () => {
      const sb = new StringBuilder('world');
      sb.prepend('Hello, ');
      expect(sb.toString()).to.equal('Hello, world');
    });

    it('should throw TypeError if argument is not a string', () => {
      const sb = new StringBuilder('Test');
      expect(() => sb.prepend({})).to.throw(TypeError);
    });
  });

  describe('insertAt()', () => {
    it('should insert string at given index', () => {
      const sb = new StringBuilder('Hello world');
      sb.insertAt('beautiful ', 6);
      expect(sb.toString()).to.equal('Hello beautiful world');
    });

    it('should throw TypeError if argument is not a string', () => {
      const sb = new StringBuilder('Hello');
      expect(() => sb.insertAt(123, 2)).to.throw(TypeError);
    });
  });

  describe('remove()', () => {
    it('should remove given number of characters from index', () => {
      const sb = new StringBuilder('Hello beautiful world');
      sb.remove(6, 10);
      expect(sb.toString()).to.equal('Hello world');
    });

    it('should do nothing if length is 0', () => {
      const sb = new StringBuilder('Hello');
      sb.remove(2, 0);
      expect(sb.toString()).to.equal('Hello');
    });
  });

  describe('toString()', () => {
    it('should return correct string', () => {
      const sb = new StringBuilder('User');
      sb.append(', there');
      sb.prepend('Hello ');
      expect(sb.toString()).to.equal('Hello User, there');
    });
  });

  describe('Complex operations', () => {
    it('should perform append, prepend, insertAt, remove correctly together', () => {
      const sb = new StringBuilder('hello');
      sb.append(', there');
      sb.prepend('User, ');
      sb.insertAt('woop', 5);
      expect(sb.toString()).to.equal('User,woop hello, there');
      sb.remove(6, 3);
      expect(sb.toString()).to.equal('User,w hello, there');
    });
  });
});