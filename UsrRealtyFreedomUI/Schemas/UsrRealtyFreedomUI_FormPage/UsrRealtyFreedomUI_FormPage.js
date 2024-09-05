define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "2813e5e9-cbed-4be8-885e-2c4785053a7a",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_vsmvl7r_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn2_14qdrcp",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn2_14qdrcp"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_3jf9n8m",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_3jf9n8m"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_prkmk1l",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_prkmk1l",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_mjyga9o",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mjyga9o_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_gapqwic",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_gapqwic",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_8pybhgo",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8pybhgo_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_uin30q1",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_uin30q1",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_3173ept",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_3173ept",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_tdvoqrd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tdvoqrd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCountry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_i6qu633",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_i6qu633",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_0s5plm0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_0s5plm0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCountry",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCity",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_laqmomg",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_laqmomg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_576vxfg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_576vxfg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCity",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_nyg61po",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_nyg61po_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_c10vhy9",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_nyg61po",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_fkvj3j8",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_c10vhy9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_0o8s1de",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_0o8s1de_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParantRealty",
									"value": "$UsrParantRealty"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_fkvj3j8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_2di0eqh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_2di0eqh_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_7zk4fd9DS"
						}
					}
				},
				"parentName": "FlexContainer_fkvj3j8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_cuolnls",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_cuolnls_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_fkvj3j8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_vfdmou4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_vfdmou4_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_cuolnls",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_tqye8gf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_tqye8gf_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_cuolnls",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_lvfrm7r",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_lvfrm7r_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_lvfrm7r_GridDetail_7zk4fd9",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_7zk4fd9"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_lvfrm7r_SearchValue",
							"GridDetailSearchFilter_lvfrm7r_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_fkvj3j8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xtbdeqn",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_nyg61po",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_7zk4fd9",
					"activeRow": "$GridDetail_7zk4fd9_ActiveRow",
					"selectionState": "$GridDetail_7zk4fd9_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_7zk4fd9_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_7zk4fd9DS_Id",
					"columns": [
						{
							"id": "8def8835-a851-4f3e-55f6-806e55ea04c0",
							"code": "GridDetail_7zk4fd9DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_7zk4fd9DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 146
						},
						{
							"id": "b0594d79-72b7-7bcf-70bb-ae27aa4c791d",
							"code": "GridDetail_7zk4fd9DS_UsrManager",
							"caption": "#ResourceString(GridDetail_7zk4fd9DS_UsrManager)#",
							"dataValueType": 10,
							"width": 133
						},
						{
							"id": "3dd7d415-c4fd-4e09-30e8-9e95f1770bf2",
							"code": "GridDetail_7zk4fd9DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_7zk4fd9DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 241
						},
						{
							"id": "ddb7ca61-bd60-27a0-1c73-7d3eeb68c03e",
							"code": "GridDetail_7zk4fd9DS_UsrComment",
							"caption": "#ResourceString(GridDetail_7zk4fd9DS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "3db52863-a1ea-0a84-1104-e444aa107379",
							"code": "GridDetail_7zk4fd9DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_7zk4fd9DS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "4055238d-9d64-dc5b-7905-786845c8d762",
							"code": "GridDetail_7zk4fd9DS_UsrComment",
							"caption": "#ResourceString(GridDetail_7zk4fd9DS_UsrComment)#",
							"dataValueType": 28,
							"width": 150
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_xtbdeqn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7zk4fd9_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Добавить тег",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_7zk4fd9DS",
							"filters": "$GridDetail_7zk4fd9 | crt.ToCollectionFilters : 'GridDetail_7zk4fd9' : $GridDetail_7zk4fd9_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_7zk4fd9_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7zk4fd9_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить тег",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_7zk4fd9DS",
							"filters": "$GridDetail_7zk4fd9 | crt.ToCollectionFilters : 'GridDetail_7zk4fd9' : $GridDetail_7zk4fd9_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_7zk4fd9_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_7zk4fd9_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7zk4fd9_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Экспорт в Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_7zk4fd9 | crt.ToCollectionFilters : 'GridDetail_7zk4fd9' : $GridDetail_7zk4fd9_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_7zk4fd9_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_7zk4fd9_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_7zk4fd9DS",
							"filters": "$GridDetail_7zk4fd9 | crt.ToCollectionFilters : 'GridDetail_7zk4fd9' : $GridDetail_7zk4fd9_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_7zk4fd9_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrColumn2_14qdrcp": {
						"modelConfig": {
							"path": "PDS.UsrColumn2"
						}
					},
					"PDS_UsrArea_3jf9n8m": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						}
					},
					"PDS_UsrType_prkmk1l": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_gapqwic": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_uin30q1": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_3173ept": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrCountry_i6qu633": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_laqmomg": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"GridDetail_7zk4fd9": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_7zk4fd9DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_lvfrm7r_GridDetail_7zk4fd9",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_7zk4fd9DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_7zk4fd9DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_7zk4fd9DS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_7zk4fd9DS.UsrManager"
									}
								},
								"GridDetail_7zk4fd9DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_7zk4fd9DS.UsrVisitDateTime"
									}
								},
								"GridDetail_7zk4fd9DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_7zk4fd9DS.UsrComment"
									}
								},
								"GridDetail_7zk4fd9DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_7zk4fd9DS.CreatedOn"
									}
								},
								"GridDetail_7zk4fd9DS_Id": {
									"modelConfig": {
										"path": "GridDetail_7zk4fd9DS.Id"
									}
								}
							}
						}
					},
					"UsrParantRealty": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_7zk4fd9DS": [
							{
								"attributePath": "UsrParantRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealtyFreedomUI"
						},
						"scope": "page"
					},
					"GridDetail_7zk4fd9DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI",
							"attributes": {
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
				request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrColumn2_14qdrcp;
					this.console.log("Price = " + price);
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});