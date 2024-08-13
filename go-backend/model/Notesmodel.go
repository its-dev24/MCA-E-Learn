package model

type Note struct {
	Title       string `json:"title,omitempty" bson:"title,omitempty"`
	Semester    string `json:"semester,omitempty" bson:"semester,omitempty"`
	SubjectCode string `json:"sunjectCode,omitempty" bson:"subjectCode,omitempty"`
	Module      string `json:"module,omitempty" bson:"module,omitempty"`
	File        string `json:"file,omitempty" bson:"file,omitempty"`
}
