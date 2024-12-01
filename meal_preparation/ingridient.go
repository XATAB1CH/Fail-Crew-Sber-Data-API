package meal_preparation

var Functions_table map[string]func([]interface{}) interface{} = make(map[string]func([]interface{}) interface{})

type Ingredient interface {
	TypeOf() string
	Call([]interface{}) interface{}
}

type Function struct {
	Name string
}

func (f *Function) TypeOf() string {
	return "func"
}

func (f *Function) Call(values []interface{}) interface{} {
	ref_fun := Functions_table[f.Name]
	var res interface{} = ref_fun(values)
	return res
}

type Data struct {
	value interface{}
}

func (d *Data) TypeOf() string {
	return "val"
}

func (d *Data) Call(values []interface{}) interface{} {
	return d.value
}
