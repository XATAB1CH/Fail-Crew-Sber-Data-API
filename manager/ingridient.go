package manager

import "github.com/go-delve/delve/pkg/proc/core"

type Ingredient interface {
	TypeOf() string
	Call([]interface{}) interface{}
}

type Function struct {
	Name string
}

func (f *Function) TypeOf() string {
	return "fun"
}

func (f *Function) Call(values []interface{}) interface{} {
	ref_fun := core.Functions_table[f.Name]
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
