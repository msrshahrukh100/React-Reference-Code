const Persons = require("./Persons")

// @ponicode
describe("componentWillMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        inst = new Persons.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        inst = new Persons.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillReceiveProps", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        inst = new Persons.default(object)
    })

    test("0", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", "a1969970175", 12345], ["bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", 56784], ["a1969970175", "a1969970175", 987650]]
        let callFunction = () => {
            inst.componentWillReceiveProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[987650, 56784, "bc23a9d531064583ace8f67dad60f6bb"], [987650, 56784, "a1969970175"], [56784, 12345, 987650]]
        let callFunction = () => {
            inst.componentWillReceiveProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[12345, "bc23a9d531064583ace8f67dad60f6bb", 12345], ["a1969970175", 987650, 987650], ["bc23a9d531064583ace8f67dad60f6bb", "a1969970175", 987650]]
        let callFunction = () => {
            inst.componentWillReceiveProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", 12, 12345], [56784, 987650, 987650], ["bc23a9d531064583ace8f67dad60f6bb", 12345, "a1969970175"]]
        let callFunction = () => {
            inst.componentWillReceiveProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[12345, 12, 987650], ["a1969970175", 12345, "a1969970175"], [56784, 12, "bc23a9d531064583ace8f67dad60f6bb"]]
        let callFunction = () => {
            inst.componentWillReceiveProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUpdate", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        inst = new Persons.default(object)
    })

    test("0", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", 987650, 56784], ["a1969970175", 56784, 56784], [987650, 56784, 12345]]
        let callFunction = () => {
            inst.componentWillUpdate(param1, "Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", 56784, 12345], ["bc23a9d531064583ace8f67dad60f6bb", 56784, 12345], [12345, "bc23a9d531064583ace8f67dad60f6bb", 987650]]
        let callFunction = () => {
            inst.componentWillUpdate(param1, "Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["a1969970175", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"], [12, "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], [12345, 12345, 987650]]
        let callFunction = () => {
            inst.componentWillUpdate(param1, "Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[987650, 12345, "a1969970175"], [12345, 12345, 56784], [56784, 987650, 56784]]
        let callFunction = () => {
            inst.componentWillUpdate(param1, "Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[12, 987650, "a1969970175"], [56784, 12, 12345], [12, "bc23a9d531064583ace8f67dad60f6bb", 987650]]
        let callFunction = () => {
            inst.componentWillUpdate(param1, "Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.componentWillUpdate(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidUpdate", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        inst = new Persons.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidUpdate()
        }
    
        expect(callFunction).not.toThrow()
    })
})
