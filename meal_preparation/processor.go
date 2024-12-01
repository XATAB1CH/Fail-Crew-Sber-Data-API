package meal_preparation

type Recipy struct {
	Id          int
	Ingredients []Ingredient
}

type Processor struct {
	Instructions    Recipy
	Cash            []Ingredient
	LastInstruction int
	ExecutionNumber int
	JobIsMade       bool
	IsWorking       bool
}

func (p *Processor) reverseCash() {
	n := len(p.Cash)
	for i := 0; i < n/2; i++ {
		tmp := p.Cash[i]
		p.Cash[i] = p.Cash[n-i-1]
		p.Cash[n-i-1] = tmp
	}
}

func (p *Processor) Load(recipy Recipy) {
	p.Instructions = recipy
}

func (p *Processor) Execute() Ingredient {
	p.IsWorking = true
	p.JobIsMade = false
	p.Cash = p.Instructions.Ingredients
	p.reverseCash()

	for len(p.Cash) > 1 && p.ExecutionNumber < 10000 {
		p.LastInstruction = len(p.Cash)
		p.ExecuteStage()
		p.ExecutionNumber += 1
	}

	p.IsWorking = false
	p.JobIsMade = true
	return p.Cash[0]
}

func (p *Processor) ExecuteStage() {

	for index := len(p.Cash) - 1; index > -1; index-- {
		p.LastInstruction = index
		if p.Cash[index].TypeOf() == "val" {
			continue
		} else {
			break
		}
	}
	var res Ingredient = p.Calculate()
	p.Cash = append(p.Cash[:p.LastInstruction], res)

}

func (p *Processor) Calculate() Ingredient {
	var params []interface{}
	for index := len(p.Cash) - 1; index > p.LastInstruction; index-- {
		params = append(params, p.Cash[index].Call([]interface{}{1}))
	}
	res := Data{p.Cash[p.LastInstruction].Call(params)}
	var i Ingredient
	i = &res
	return i
}
